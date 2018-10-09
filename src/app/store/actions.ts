import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  APP_LOADING = '[Core] App Loading',
  APP_LOADED_SUCCESS = '[Core] App Loaded Success',
  APP_LOADED_FAILURE = '[Core] App Loaded Failure'
}

export class ActionAppLoading implements Action {
  readonly type = CoreActionTypes.APP_LOADING;
}

export class ActionAppLoadedSuccess implements Action {
  readonly type = CoreActionTypes.APP_LOADED_SUCCESS;
}

export class ActionAppLoadedFailure implements Action {
  readonly type = CoreActionTypes.APP_LOADED_FAILURE;
}

export type CoreActions = ActionAppLoading | ActionAppLoadedSuccess | ActionAppLoadedFailure;
