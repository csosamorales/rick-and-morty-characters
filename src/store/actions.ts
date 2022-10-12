import { CharacterInfo } from "utils/types";
import {
  Actions,
  SET_MENU_SHOW,
  SET_NAME_CHARACTER_FILTER,
  SET_GENDER_FILTER,
  SET_STATUS_FILTER,
  SET_CHARACTER_INFO,
  SET_PAGE,
} from "./action-type";

export const setMenuShow = (status: boolean): Actions => ({
  type: SET_MENU_SHOW,
  payload: status,
});

export const setNameCharacterFilter = (name: string): Actions => ({
  type: SET_NAME_CHARACTER_FILTER,
  payload: name,
});

export const setGenderFilter = (gender: string): Actions => ({
  type: SET_GENDER_FILTER,
  payload: gender,
});

export const setStatusFilter = (status: string): Actions => ({
  type: SET_STATUS_FILTER,
  payload: status,
});

export const setCharacterInfo = (character: CharacterInfo): Actions => ({
  type: SET_CHARACTER_INFO,
  payload: character,
});

export const setPage = (page: number): Actions => ({
  type: SET_PAGE,
  payload: page,
});
