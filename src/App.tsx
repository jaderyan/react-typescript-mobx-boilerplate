import React, { FunctionComponent } from "react";
import { Provider, observer } from "mobx-react";

import "./styles/main.scss";

import Container from "./components/Container/Container";

import UIStore from "./stores/uiStore";

const uiStore = new UIStore();

const App: FunctionComponent = () => (
  <Provider uiStore={uiStore}>
    <Container />
  </Provider>
);

export default observer(App);
