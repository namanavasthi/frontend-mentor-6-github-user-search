import React, { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { useQueryContext } from "./Context";

export const Search = () => {
  const [search, setSearch] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const { setQuery, status } = useQueryContext();

  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (status === "user-error") {
      setErrorMessage("No results");
    } else {
      setErrorMessage("");
    }
  }, [status]);

  return (
    <form
      className="text-13 leading-25 tracking-0 md:text-18 md:leading-25 relative w-full shadow-lg mb-4 rounded-xl overflow-hidden bg-white dark:bg-primary-800"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="github-search">
        <span className="invisible absolute w-0 h-0">Search GitHub username...</span>
      </label>
      <MdSearch className="text-20 md:text-24 text-primary-100 absolute left-2.5 md:left-5 top-1/2 transform -translate-y-1/2" />
      <input
        className="placeholder-primary-300 dark:placeholder-white p-4 px-10 pr-20 md:px-14 md:pr-28 w-full bg-transparent dark:text-white"
        type="text"
        autoComplete="off"
        id="github-search"
        placeholder="Search GitHub username..."
        name="search"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onInput={(e) => setSearch(e.target.value)}
      />
      <span className="absolute right-2.5 p-4 pr-20 md:px-14 md:pr-28 text-primary-900">{errorMessage}</span>
      <button
        className={`absolute text-14 leading-21 md:text-16 md:leading-24 tracking-0 right-2.5 md:right-5 top-1/2 transform -translate-y-1/2 rounded-xl py-2 px-3 md:px-4 bg-primary-100 text-white ${
          isFocus ? "bg-primary-1000" : ""
        }`}
        type="submit"
        onClick={() => setQuery(search)}
      >
        Search
      </button>
    </form>
  );
};
