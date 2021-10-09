import React, { useState } from "react";
import { Context, DEFAULT, QueryContext, ThemeContext } from "./Context";
import { Header } from "./Header";
import { Main } from "./Main";
import useFetch from "./useFetch";
import { Wrapper } from "./Wrapper";

const getTheme = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    return "dark";
  } else {
    document.documentElement.classList.remove("dark");
    return "light";
  }
};

const App = () => {
  const [theme, setTheme] = useState(getTheme());

  const [query, setQuery] = useState(DEFAULT.QUERY);

  const [data, status] = useFetch(query === DEFAULT.QUERY ? DEFAULT.USERNAME : query);

  const updateTheme = () => {
    if (theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");

      setTheme("light");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");

      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <div className={`App flex justify-center items-center font-space bg-primary-500 dark:bg-primary-700`}>
        <Context.Provider value={{ data }}>
          <QueryContext.Provider value={{ query, setQuery, status }}>
            <Wrapper>
              <Header />
              <Main />
            </Wrapper>
          </QueryContext.Provider>
        </Context.Provider>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
