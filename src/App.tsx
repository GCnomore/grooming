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
import Layout from "./components/Layout/Layout";

function App() {
  const dispatch = useDispatch<RootDispatch>();
  const { groomingShop } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getGroomingStore("632f5719c380ab7a91cda655"));
  }, []);

  return (
    <Styled.AppContainer className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Styled.AppContainer>
  );
}

export default App;
