import {createSelectorHook} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {CocktailsReducer} from './reducers/CocktailsReducer';

const rootReducer = combineReducers({
  cocktails: CocktailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const typedUseSelector = createSelectorHook<RootState>();
export const store = createStore(rootReducer);
