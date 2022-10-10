import React from "react";
import { RouterProvider } from "react-router-dom";

import * as Styled from "./App.styled";
import router from "./router/router";

function App() {
  return (
    <Styled.AppContainer className="App">
      <RouterProvider router={router} />
    </Styled.AppContainer>
  );
}

export default App;
