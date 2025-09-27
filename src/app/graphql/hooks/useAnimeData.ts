"use client";

// Apollo hook for GraphQL queries
import { useQuery } from "@apollo/client/react";
// GraphQL query for anime data
import { GET_ANIME_DATA } from "@/app/graphql/queries/getAnimeData";
// Generated TypeScript types
import type {
  GetAnimeDataQuery,
  GetAnimeDataQueryVariables,
} from "@/app/graphql/generated/graphql";

export function useAnimeData(variables: GetAnimeDataQueryVariables = {}) {
  // Execute anime query with loading states and helper functions
  const { data, loading, error, fetchMore, refetch } = useQuery<
    GetAnimeDataQuery,
    GetAnimeDataQueryVariables
  >(GET_ANIME_DATA, {
    // Default to page 1, no adult content, allow overrides
    variables: {
      page: 1,
      isAdult: false,
      ...variables,
    },
    // Show loading state during pagination/refetch
    notifyOnNetworkStatusChange: true,
  });

  // Extract anime list and pagination info
  const items = data?.Page?.media ?? [];
  const hasNextPage = Boolean(data?.Page?.pageInfo?.hasNextPage);

  return {
    items,
    loading,
    error,
    hasNextPage,
    fetchMore,
    refetch,
  } as const;
}
