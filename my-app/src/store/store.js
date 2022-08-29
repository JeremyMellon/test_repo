import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { AppReducers, AppSagas } from "../redux";
import { loadState, saveState } from "./storage";

const persistedState = loadState();

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose;

const store = createStore(
  AppReducers,
  persistedState,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

store.subscribe(() => {
  // Save state when changes occurred
  const { auth, userV2 } = store.getState();
  saveState({
    auth,
    userV2,
  });
});


sagaMiddleware.run(AppSagas);

export default store;
