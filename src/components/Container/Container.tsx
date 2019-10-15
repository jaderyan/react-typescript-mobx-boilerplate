import React, { FunctionComponent } from "react";
import { observer, inject } from "mobx-react";

import Button from "../Button/Button";
import UIStore from "../../stores/uiStore";

import image from "../../assets/images/corgi-smiling.jpg";
import "./Container.scss";

interface IProps {
  uiStore?: UIStore;
}

const Container: FunctionComponent<IProps> = ({ uiStore }) => (
  <div className="flex-container">
    <div className="flex-col--12">
      <header>
        <h1>Hello World!</h1>
      </header>
    </div>
    <div className="flex-col--6">
      <Button text="click for suprise" onClick={() => uiStore!.toggleModal()} />
    </div>
    {uiStore!.modalOpen && (
      <div className="flex-col--6">
        <img
          src={image}
          alt="Picture of corgi smiling"
          className="surprise-image"
        />
      </div>
    )}
  </div>
);

export default inject("uiStore")(observer(Container));
