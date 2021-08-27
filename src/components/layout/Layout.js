import React from "react";

import Header from "./header/Header";
import Main from "./main/Main";

import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <Main customClassName={props.customClassName}>{props.children}</Main>
    </div>
  );
};

export default Layout;