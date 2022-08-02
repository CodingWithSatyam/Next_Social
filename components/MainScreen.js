import React from "react";
import LeftScreen from "./LeftScreen";
import MiddleScreen from "./MiddleScreen";
import RightScreen from "./RightScreen";

const MainScreen = () => {
  return (
    <>
      <main>
        <LeftScreen />
        <MiddleScreen />
        <RightScreen />
      </main>
    </>
  );
};

export default MainScreen;
