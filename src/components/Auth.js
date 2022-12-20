import React, { useEffect, useState } from "react";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  TOKEN,
} from "../utils/GlobalVariable";
import UserDashboard from "./UserDashboard";

function Auth() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";

      window.localStorage.setItem("token", token);
      setToken(token);
    }
  }, []);

  console.log(token);

  return (
    <div>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login krlo bhai pehle ek baar
        </a>
      ) : (
        <div>
          <UserDashboard token={token} />
        </div>
      )}
    </div>
  );
}

export default Auth;
