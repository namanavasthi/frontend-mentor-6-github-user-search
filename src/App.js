import React, { useState, useEffect } from "react";

import { DEFAULT, Context, ThemeContext, QueryContext } from "./Context";
import { Header } from "./Header";
import { Main } from "./Main";
import { Wrapper } from "./Wrapper";

const getProfile = async (username = DEFAULT.USERNAME) => {
  const response = await fetch(`${DEFAULT.API_BASE_URL}${username}`);
  const result = await response.json();
  return result;
};

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
  const [data, setData] = useState(DEFAULT.CONTEXT);

  const [theme, setTheme] = useState(getTheme());

  const [query, setQuery] = useState({ query: DEFAULT.QUERY, error: false });

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

  useEffect(() => {
    if (query.query !== DEFAULT.QUERY) {
      getProfile(query.query)
        .then((res) => {
          setData(
            (({
              avatar_url,
              name,
              created_at,
              login,
              bio,
              public_repos,
              followers,
              following,
              location,
              twitter_username,
              blog,
              company,
            }) => ({
              avatar_url,
              name,
              created_at,
              login,
              bio,
              public_repos,
              followers,
              following,
              location,
              twitter_username,
              blog,
              company,
            }))(res)
          );
        })
        .catch(() => setQuery({ query: query, error: true }));
    }
  }, [query]);

  useEffect(() => {
    getProfile()
      .then((res) => {
        setData(
          (({
            avatar_url,
            name,
            created_at,
            login,
            bio,
            public_repos,
            followers,
            following,
            location,
            twitter_username,
            blog,
            company,
          }) => ({
            avatar_url,
            name,
            created_at,
            login,
            bio,
            public_repos,
            followers,
            following,
            location,
            twitter_username,
            blog,
            company,
          }))(res)
        );
      })
      .catch((e) => console.error(`cannot fetch default profile : ${e}`));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <div className={`App flex justify-center items-center font-space bg-primary-500 dark:bg-primary-700`}>
        <Context.Provider value={{ data }}>
          <QueryContext.Provider value={{ query, setQuery }}>
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
