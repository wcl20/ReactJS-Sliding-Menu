import {
  OPEN_MENU, CLOSE_MENU, HIDE_MENU, SHOW_MENU,
} from "../constants/actionTypes";

export function openMenu(direction) {
  return { type: OPEN_MENU, direction };
}

export function closeMenu(direction) {
  return { type: CLOSE_MENU, direction };
}

export function showMenu(direction) {
  return { type: SHOW_MENU, direction };
}

export function hideMenu(direction) {
  return { type: HIDE_MENU, direction };
}
