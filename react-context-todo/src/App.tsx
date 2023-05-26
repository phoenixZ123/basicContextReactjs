import React from "react";
import { UserContextProvider } from "./components/UserContext";
import Box from "./components/Box";
import Info from "./components/Info";

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <Box />
        <Info />
      </UserContextProvider>
    </div>
  );
};

export default App;
