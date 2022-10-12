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

export type AppState = {
  showMenu: boolean;
  nameFilter: string;
  statusFilter: string;
  genderFilter: string;
  characterDetail: CharacterInfo;
  page: number;
};

const initialState: AppState = {
  showMenu: false,
  nameFilter: "",
  statusFilter: "",
  genderFilter: "",
  characterDetail: {
    id: 0,
    name: "",
    specie: "",
    status: "",
    type: "",
    gender: "",
    origin: "",
    image: "",
    created: "",
    episodes: [],
  },
  page: 1,
};

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_MENU_SHOW:
      return { ...state, showMenu: action.payload };
    case SET_NAME_CHARACTER_FILTER:
      return { ...state, nameFilter: action.payload };
    case SET_STATUS_FILTER:
      return { ...state, statusFilter: action.payload };
    case SET_GENDER_FILTER:
      return { ...state, genderFilter: action.payload };
    case SET_CHARACTER_INFO:
      return { ...state, characterDetail: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default reducer;
