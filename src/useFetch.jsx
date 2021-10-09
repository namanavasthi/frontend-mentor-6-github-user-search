import { useEffect, useState } from "react";

import { DEFAULT } from "./Context";

const localCache = {};

export default function useFetch(username) {
  const [user, setUser] = useState({});

  const [status, setStatus] = useState(DEFAULT.STATUS);

  useEffect(() => {
    if (!username) {
      setUser({});
    } else if (localCache[username]) {
      setUser(localCache[username]);
    } else {
      requestUserData();
    }

    async function requestUserData() {
      setUser({});
      setStatus("loading");
      try {
        const result = await fetch(`${DEFAULT.API_BASE_URL}${username}`);
        const json = await result.json();

        if (json.message) {
          // this means there was some error with the username given
          localCache[username] = {};
          setUser({});
          setStatus("user-error");
        } else {
          localCache[username] = json || {};
          setUser(localCache[username]);
          setStatus("loaded");
        }
      } catch (err) {
        // some error on calling the api
        setUser({});
        setStatus("api-error");
      }
    }
  }, [username]);

  return [user, status];
}
