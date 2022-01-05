import React, { Fragment } from "react";

import Header from "./header/Header";
import Main from "./main/Main";

import "./Layout.scss";
import NewHeader from "./new-header/NewHeader";

const Layout = (props) => {
  return (
    <div className="layout">
      {props.customClassName !== "testTailwind" ? (
        <Fragment>
          <Header
            noExtension={props.noExtension}
            customClassName={props.customClassName}
          />
          <Main customClassName={props.customClassName}>{props.children}</Main>
        </Fragment>
      ) : (
        <Fragment>
          <NewHeader />
          <Main>{props.children}</Main>
        </Fragment>
      )}
    </div>
  );
};

export default Layout;
