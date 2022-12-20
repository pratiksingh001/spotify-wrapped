import axios from "axios";
import React, { useEffect, useState } from "react";

function UserDashboard({ token }) {
  const [userProfileImageURL, setUserProfileImageURL] = useState("");

  const getCurrentUser = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("data", data);
    setUserProfileImageURL(data.href);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("token", "");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <img src={userProfileImageURL} />
    </div>
  );
}

export default UserDashboard;
