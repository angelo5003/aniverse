import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql.anilist.co",
  documents: ["src/app/graphql/**/*.{ts,tsx}"],
  generates: {
    "./src/app/graphql/generated/": {
      preset: "client",
      plugins: [],
      config: {
        strictScalars: true,
        scalars: {
          FuzzyDateInt: "number",
          CountryCode: "string",
          Json: "any",
        },
        nonOptionalTypename: true,
        skipTypename: false,
      },
    },
    "./src/app/graphql/generated/types.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        strictScalars: true,
        scalars: {
          FuzzyDateInt: "number",
          CountryCode: "string",
          Json: "any",
        },
        nonOptionalTypename: true,
        skipTypename: false,
        maybeValue: "T | null | undefined",
      },
    },
  },
};

export default config;
