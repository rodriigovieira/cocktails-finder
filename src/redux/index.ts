import {combineReducers, createStore} from 'redux';
import {CocktailsReducer} from './reducers/CocktailsReducer';

const rootReducer = combineReducers({
  cocktails: CocktailsReducer,
});

export const store = createStore(rootReducer);
