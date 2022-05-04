import React from "react";
import Navs from "./Navs";
import Title from "../pages/Title";
const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are You Looking For A Movie Or An Actor?"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
