import React from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useThemeContext } from "./Context";

export const ThemeToggle = () => {
  const { theme, updateTheme } = useThemeContext();

  return (
    <button
      className="flex flex-row items-center text-primary-300 focus:text-primary-700 hover:text-primary-700 dark:text-white dark:focus:text-primary-1100 dark:hover:text-primary-1100"
      onClick={() => updateTheme()}
    >
      <span className="pr-2 uppercase text-16 leading-24 tracking-0 md:text-13 md:leading-20 md:tracking-2.5">
        {theme === "dark" ? "light" : "dark"}
      </span>{" "}
      {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};
