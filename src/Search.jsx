import React, { useState, useEffect } from "react";

import { useQueryContext } from "./Context";

export const Search = () => {
  const [search, setSearch] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const { setQuery, query } = useQueryContext();

  useEffect(() => {
    if (query.error) {
      setErrorMessage("No results");
    }
  }, [query]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="github-search">
        <span className="invisible">Search GitHub username...</span>
      </label>
      <input
        type="text"
        id="github-search"
        placeholder="Search GitHub username..."
        name="search"
        onInput={(e) => setSearch(e.target.value)}
      />
      <span>{errorMessage}</span>
      <button type="submit" onClick={() => setQuery(search)}>
        Search
      </button>
    </form>
  );
};
