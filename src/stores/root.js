import { extendObservable } from 'mobx';

export default class RootStore {
  constructor(props) {
    extendObservable(this, {
      thing: 'this is a thing'
    });
  }
}
