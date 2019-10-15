import { observable, action } from "mobx";

class UIStore {
  @observable modalOpen: boolean = false;

  @action
  toggleModal = () => {
    this.modalOpen = !this.modalOpen;
  };
}

export default UIStore;
