import { routerReducer } from '@ngrx/router-store';

import { AppState } from '@app/models/app-state';
import { CoreActions, CoreActionTypes } from './actions';


const initialState: AppState = {
  loading: true
};

export function appReducer(state: AppState = initialState, action: CoreActions) {
  switch (action.type) {
    case CoreActionTypes.APP_LOADING:
      return {
        ...state,
        loading: true
      };

    case CoreActionTypes.APP_LOADED_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case CoreActionTypes.APP_LOADED_FAILURE:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

export const conbinedReducers = {
  core: appReducer,
  router: routerReducer
};
