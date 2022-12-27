import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";

import * as Styled from "./App.styled";
import router from "./router/router";
import { useDispatch } from "react-redux";
import { RootDispatch } from "./data/redux/store";
import { useSelector } from "react-redux";
import { RootState } from "./data/redux/appointmentSlice";
import { getGroomingStore } from "./data/redux/actions";
import upperAllFirst from "./util/upperAllFirst";

function App() {
  const dispatch = useDispatch<RootDispatch>();
  const { groomingShop } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getGroomingStore("632f5719c380ab7a91cda655"));
  }, []);

  return (
    <Styled.AppContainer className="App">
      <Styled.Header>
        <div>
          <a href="/account">Account</a>
        </div>
        <Styled.StoreNameContainer>
          <h1>{upperAllFirst(groomingShop?.name ?? "")}</h1>
        </Styled.StoreNameContainer>
      </Styled.Header>

      <RouterProvider router={router} />
    </Styled.AppContainer>
  );
}

export default App;
