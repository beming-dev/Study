import React, { useEffect, useState, useRef } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "we Just went online" : "offline");
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
