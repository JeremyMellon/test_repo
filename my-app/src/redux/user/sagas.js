import { takeLatest } from "redux-saga/effects";
import {types} from "./actions";

function* actionA() {

};

// linking type to saga function
export default [
  takeLatest(types.ACTION_A, actionA),
];
