export const UPDATE_COCKTAILS_LIST = 'UPDATE_COCKTAILS_LIST';
export const CLEAR_COCKTAILS_LIST = 'CLEAR_COCKTAILS_LIST';

export type UpdateCockailsListAction = {
  type: typeof UPDATE_COCKTAILS_LIST;
  payload: any;
};

export type ClearCockailsListAction = {
  type: typeof CLEAR_COCKTAILS_LIST;
};

export type CocktailActionType =
  | UpdateCockailsListAction
  | ClearCockailsListAction;
