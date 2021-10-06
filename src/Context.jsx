import { createContext, useContext } from "react";

export const DEFAULT = {
  API_BASE_URL: "https://api.github.com/users/",
  USERNAME: "Octocat",
  ERROR: "No results",
  NOT_FOUND: "Not Available",
  CONTEXT: {
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
  THEME: "media",
};

export const Context = createContext(DEFAULT.CONTEXT);
export const useAppContext = () => useContext(Context);
