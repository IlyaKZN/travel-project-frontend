import { CommitOptions, createStore, Store as VuexStore } from 'vuex';
import { IState } from '@/types/store';
import state from './state';
import { mutations, TMutations } from './mutations';

const store = createStore<IState>({
  state,
  mutations,
});

export type TStore = Omit<VuexStore<IState>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof TMutations, P extends Parameters<TMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<TMutations[K]>;
};

export function useStore() {
  return store as TStore;
}

export default store;
