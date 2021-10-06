import React, { useState, useEffect } from "react";

import { DEFAULT, Context } from "./Context";

const getProfile = async (username = DEFAULT.USERNAME) => {
  const response = await fetch(`${DEFAULT.API_BASE_URL}${username}`);
  const result = await response.json();
  return result;
};

const App = () => {
  const [data, setData] = useState(DEFAULT.CONTEXT);

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
    <div className="App flex justify-center">
      <Context.Provider value={{ data }}>
        <h1 className="text-blue-600 text-4xl">Hello to Frontend Mentor Bootstrap</h1>
        {data.name}
      </Context.Provider>
    </div>
  );
};

export default App;
