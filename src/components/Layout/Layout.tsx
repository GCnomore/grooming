import React from "react";

import * as Styled from "./Layout.styled";

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Layout;
