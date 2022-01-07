import React, { FunctionComponent } from "react";

export const Layout: FunctionComponent = ({ children }) => {
  return <section className="p-5">{children}</section>;
};
