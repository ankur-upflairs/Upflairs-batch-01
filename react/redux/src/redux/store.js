import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";

let combine=combineReducers({counter:counterReducer})

export let store=createStore(combine)