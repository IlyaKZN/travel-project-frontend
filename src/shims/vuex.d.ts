import { Store } from 'vuex';
import { IStore } from '../types/store';

declare module '@vue/runtime-core' {

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<IStore>
  }
}
