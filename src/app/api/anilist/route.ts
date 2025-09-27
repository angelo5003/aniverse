// Import Next.js types to handle incoming requests and send responses
import { NextRequest, NextResponse } from "next/server";

// Ensure this file only runs on the server
import "server-only";

// Handle POST requests to /api/anilist
export async function POST(req: NextRequest) {
  try {
    // Read JSON body sent from the client (GraphQL query + variables)
    const body = await req.json();

    // Read upstream GraphQL URL from server environment variables
    const upstreamUrl = process.env.ANILIST_URI;
    if (!upstreamUrl) {
      // If not configured, return a 500 error so we don't leak details
      return NextResponse.json(
        { error: "Missing ANILIST_URI server environment variable" },
        { status: 500 }
      );
    }

    // Forward the request to the upstream GraphQL API from the server
    const response = await fetch(upstreamUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Optionally include auth token from server-only env vars
        ...(process.env.ANILIST_TOKEN
          ? { Authorization: `Bearer ${process.env.ANILIST_TOKEN}` }
          : {}),
      },
      // Pass through the original GraphQL body unchanged
      body: JSON.stringify(body),
      // Avoid caching user-specific requests at the edge
      cache: "no-store",
    });

    // Parse the JSON response from the upstream
    const json = await response.json();
    // Return the JSON back to the client with the same status code
    return NextResponse.json(json, { status: response.status });
  } catch (error) {
    // If something went wrong, return a generic 500 error
    return NextResponse.json(
      { error: "Failed to proxy request" },
      { status: 500 }
    );
  }
}

// Ensure this route is always treated as dynamic (no static caching)
export const dynamic = "force-dynamic";
