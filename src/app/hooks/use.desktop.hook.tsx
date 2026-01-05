import { useMediaQuery } from "@mui/material";

export function useIsDesktop(): boolean {
  return useMediaQuery(`(min-width: 1024px)`);
}

export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: 767px)`);
}