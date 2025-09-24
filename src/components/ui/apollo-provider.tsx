"use client";

import { ApolloProvider } from "@apollo/client/react";
import apolloClient from "@/lib/ApolloClient/apolloClient";

type ApolloClientProviderProps = {
  children: React.ReactNode;
};

export const ApolloClientProvider = ({
  children,
}: ApolloClientProviderProps) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
