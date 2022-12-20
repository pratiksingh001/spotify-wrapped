import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserDashboard from "./components/UserDashboard";

function App() {
  // Yathaarth's User ID
  const CLIENT_ID = "6d1d7666c23e44dfa4e14c620587fd2d";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

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

  return (
    <div className="App">
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

export default App;
