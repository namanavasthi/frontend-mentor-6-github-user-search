import { createContext, useContext } from "react";

export const DEFAULT = {
  API_BASE_URL: "https://api.github.com/users/",
  USERNAME: "Octocat",
  // USERNAME: "namanavasthi",
  ERROR: "No results",
  NOT_FOUND: "Not Available",
  NO_BIO: "This profile has no bio",
  STATUS: "unloaded",
  CONTEXT: {
    error: 0,
    avatar_url: "",
    name: "",
    created_at: "",
    login: "",
    bio: "",
    public_repos: "",
    followers: "",
    following: "",
    location: "",
    twitter_username: "",
    blog: "",
    company: "",
  },
  THEME: "",
  QUERY: "",
};

export const Context = createContext(DEFAULT.CONTEXT);
export const useAppContext = () => useContext(Context);

export const ThemeContext = createContext({ theme: DEFAULT.THEME, updateTheme: () => {} });
export const useThemeContext = () => useContext(ThemeContext);

export const QueryContext = createContext({
  query: DEFAULT.QUERY,
  setQuery: () => {},
  status: DEFAULT.STATUS,
});
export const useQueryContext = () => useContext(QueryContext);
