import { createContext } from "react";

export interface ThemeContext {
  theme: "dark" | "light";
}

export const themeContext = createContext<ThemeContext>({
  theme: "light",
});
