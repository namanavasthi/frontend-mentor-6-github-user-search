import React from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useThemeContext } from "./Context";

export const ThemeToggle = () => {
  const { theme, updateTheme } = useThemeContext();

  return (
    <button className="flex flex-row items-center text-primary-700 dark:text-white" onClick={() => updateTheme()}>
      <span className="pr-2 uppercase text-16 leading-24 tracking-0">{theme === "dark" ? "light" : "dark"}</span>{" "}
      {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};
