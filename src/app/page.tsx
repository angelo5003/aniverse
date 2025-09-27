"use client";

// Import our simple data hook that queries through the server proxy
// import { useAnimeData } from "@/app/graphql/hooks/useAnimeData";
import { useQuery } from "@apollo/client/react";
import { GET_ANIME_DATA } from "./graphql/queries/getAnimeData";
import type { GetAnimeDataQuery } from "./graphql/generated/types";

export default function Home() {
  // Fetch first page of anime; the browser calls /api/anilist (server)
  const { loading, error, data } = useQuery<GetAnimeDataQuery>(GET_ANIME_DATA, {
    variables: { page: 1 },
  });

  // Show basic loading and error states
  if (loading) return <div>Loading…</div>;
  if (error) return <div>Failed to load</div>;

  return (
    <div>
      <h1 role="heading">Top Anime</h1>
      <ul>
        {data?.Page?.media?.map((item) => (
          <li key={item?.id}>
            {item?.title?.english || item?.title?.romaji || item?.id}
          </li>
        ))}
      </ul>
    </div>
  );
}
