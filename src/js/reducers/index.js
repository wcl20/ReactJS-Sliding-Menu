import { combineReducers } from "redux";
import {
  OPEN_MENU, CLOSE_MENU, HIDE_MENU, SHOW_MENU,
  UP, DOWN, LEFT, RIGHT
} from "../constants/actionTypes";

function menuUp(state = { display: "hide" }, action) {
  if(action.direction !== UP) return state;
  switch(action.type) {
    case OPEN_MENU:
      return Object.assign({}, state, { display: "open" });
    case CLOSE_MENU:
      return Object.assign({}, state, { display: "close" });
    case SHOW_MENU:
      return Object.assign({}, state, { display: "show" });
    case HIDE_MENU:
      return Object.assign({}, state, { display: "hide" });
    default:
      return state;
  }
}

function menuDown(state = { display: "hide" }, action) {
  if(action.direction !== DOWN) return state;
  switch(action.type) {
    case OPEN_MENU:
      return Object.assign({}, state, { display: "open" });
    case CLOSE_MENU:
      return Object.assign({}, state, { display: "close" });
    case SHOW_MENU:
      return Object.assign({}, state, { display: "show" });
    case HIDE_MENU:
      return Object.assign({}, state, { display: "hide" });
    default:
      return state;
  }
}

function menuLeft(state = { display: "hide" }, action) {
  if(action.direction !== LEFT) return state;
  switch(action.type) {
    case OPEN_MENU:
      return Object.assign({}, state, { display: "open" });
    case CLOSE_MENU:
      return Object.assign({}, state, { display: "close" });
    case SHOW_MENU:
      return Object.assign({}, state, { display: "show" });
    case HIDE_MENU:
      return Object.assign({}, state, { display: "hide" });
    default:
      return state;
  }
}

function menuRight(state = { display: "hide" }, action) {
  if(action.direction !== RIGHT) return state;
  switch(action.type) {
    case OPEN_MENU:
      return Object.assign({}, state, { display: "open" });
    case CLOSE_MENU:
      return Object.assign({}, state, { display: "close" });
    case SHOW_MENU:
      return Object.assign({}, state, { display: "show" });
    case HIDE_MENU:
      return Object.assign({}, state, { display: "hide" });
    default:
      return state;
  }
}

const rootReducer = combineReducers({ menuUp, menuDown, menuLeft, menuRight });
export default rootReducer;
