import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../data/redux/appointmentSlice";
import upperAllFirst from "../../util/upperAllFirst";
import * as Styled from "./AppHeader.styled";

const Header: React.FC = () => {
  const { groomingShop } = useSelector((state: RootState) => state);

  return (
    <Styled.Container>
      <div>
        <a href="/account">Account</a>
      </div>
      <div>
        <h1>{upperAllFirst(groomingShop?.name ?? "")}</h1>
      </div>
    </Styled.Container>
  );
};

export default Header;
