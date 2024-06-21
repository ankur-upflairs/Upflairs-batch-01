import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import todoReducer from "./todoReducer";

let combine = combineReducers({
     counter: counterReducer,
     todo:todoReducer
     })

export let store = createStore(combine)