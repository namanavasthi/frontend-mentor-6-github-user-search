import React from "react";

import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full items-center mb-8">
      <h1 className="font-bold font-space text-26 leading-38 tracking-0 text-primary-700 dark:text-white">devfinder</h1>
      <ThemeToggle />
    </header>
  );
};
