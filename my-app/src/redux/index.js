import { combineReducers } from "redux";
import { UserReducers, UserSagas } from "./user";
import { all } from "redux-saga/effects";


export const AppReducers = combineReducers({
  UserReducers
});

export function* AppSagas() {
  yield all(UserSagas);
}

