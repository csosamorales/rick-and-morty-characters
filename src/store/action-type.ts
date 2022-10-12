import { CharacterInfo } from "utils/types";

export const SET_MENU_SHOW = "set-menu-show";
export const SET_NAME_CHARACTER_FILTER = "set-name-character-filter";
export const SET_STATUS_FILTER = "set-status-filter";
export const SET_GENDER_FILTER = "set-gender-filter";
export const SET_CHARACTER_INFO = "set-character-info";
export const SET_PAGE = "set-page";

interface setMenuShow {
  type: typeof SET_MENU_SHOW;
  payload: boolean;
}

interface setNameCharacterFilter {
  type: typeof SET_NAME_CHARACTER_FILTER;
  payload: string;
}

interface setStatusFilter {
  type: typeof SET_STATUS_FILTER;
  payload: string;
}

interface setGenderFilter {
  type: typeof SET_GENDER_FILTER;
  payload: string;
}

interface setCharacterInfo {
  type: typeof SET_CHARACTER_INFO;
  payload: CharacterInfo;
}

interface setPage {
  type: typeof SET_PAGE;
  payload: number;
}

export type Actions =
  | setMenuShow
  | setNameCharacterFilter
  | setStatusFilter
  | setGenderFilter
  | setCharacterInfo
  | setPage;
