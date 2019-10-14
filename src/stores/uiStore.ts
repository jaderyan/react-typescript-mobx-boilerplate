import { observable, action } from "mobx";

export class UIStore {
  @observable modalOpen: boolean = false;

  @action
  toggleModal = () => {
    this.modalOpen = !this.modalOpen;
  };
}
