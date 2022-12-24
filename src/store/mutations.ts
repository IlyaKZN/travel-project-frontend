import { MutationTree } from 'vuex';
import { IState } from '@/types/store';
import { TApiCurrentUser } from '@/types/api';

// eslint-disable-next-line no-shadow
export enum MutationType {
  SetCurrentUser = 'SET_CURRENT_USER'
}

export type TMutations = {
  [MutationType.SetCurrentUser](state: IState, currentUser: TApiCurrentUser): void,
}

export const mutations: MutationTree<IState> & TMutations = {
  [MutationType.SetCurrentUser](state, currentUser) {
    state.currentUser = currentUser;
  },
};
