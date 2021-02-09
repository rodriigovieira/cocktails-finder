import {
  CLEAR_COCKTAILS_LIST,
  UPDATE_COCKTAILS_LIST,
} from '../types/CocktailsTypes';

type CocktailsReducerType = {
  cocktails: Array<any>;
};

const InitialState: CocktailsReducerType = {
  cocktails: [],
};

export const CocktailsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case UPDATE_COCKTAILS_LIST: {
      return {
        ...state,
        cocktails: action.payload,
      };
    }
    case CLEAR_COCKTAILS_LIST: {
      return {
        ...state,
        cocktails: [],
      };
    }
    default: {
      return {...state};
    }
  }
};
