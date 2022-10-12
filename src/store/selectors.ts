import { createSelector } from "reselect";
import reducer, { AppState } from "./reducer";

export type RootState = ReturnType<typeof reducer>;

const getReducer = (state: RootState) => state;

export const showMenuSelector = createSelector(
  (state: AppState) => getReducer(state).showMenu,
  (showMenu) => showMenu
);

export const nameCharacterFilterSelector = createSelector(
  (state: AppState) => getReducer(state).nameFilter,
  (nameFilter) => nameFilter
);

export const genderFilterSelector = createSelector(
  (state: AppState) => getReducer(state).genderFilter,
  (genderFilter) => genderFilter
);

export const statusFilterSelector = createSelector(
  (state: AppState) => getReducer(state).statusFilter,
  (statusFilter) => statusFilter
);

export const characterInfoSelector = createSelector(
  (state: AppState) => getReducer(state).characterDetail,
  (characterDetail) => characterDetail
);

export const pageSelecter = createSelector(
  (state: AppState) => getReducer(state).page,
  (page) => page
);
