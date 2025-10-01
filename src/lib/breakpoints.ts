import { createBreakpoints } from "@chakra-ui/theme-tools";

// Centralized breakpoints configuration for the entire project
export const breakpoints = createBreakpoints({
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
});
