/**
 * All types related to the navigation
 * and its screens are in this file.
 */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  InitialScreen: undefined;
  SearchScreen: undefined;
};

// Route Props
type InitialScreenRouteProp = RouteProp<RootStackParamList, 'InitialScreen'>;
type SearchScreenRouteProp = RouteProp<RootStackParamList, 'SearchScreen'>;

// Navigation Props
type InitialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'InitialScreen'
>;
type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SearchScreen'
>;

// Exporting Screens Props
export type InitialScreenProps = {
  route: InitialScreenRouteProp;
  navigation: InitialScreenNavigationProp;
};
export type SearchScreenProps = {
  route: SearchScreenRouteProp;
  navigation: SearchScreenNavigationProp;
};

// Custom types
export type CocktailModel = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};
