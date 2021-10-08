import React from "react";

import { Search } from "./Search";
import { Profile } from "./Profile";

export const Main = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <Search />
      <Profile />
    </main>
  );
};
