import {faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {TextInput, Text, View, ActivityIndicator, Alert} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import CocktailComponent from '../../components/CocktailComponent';
import CustomLinearGradient from '../../components/LinearGradient';
import {APIBaseURL} from '../../constants';
import {typedUseSelector} from '../../redux';
import {
  CLEAR_COCKTAILS_LIST,
  UPDATE_COCKTAILS_LIST,
} from '../../redux/types/CocktailsTypes';
import {CocktailModel, SearchScreenProps} from '../../types';
import {styles} from './styles';

const SearchScreen = ({navigation}: SearchScreenProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const {cocktails} = typedUseSelector((state) => state.cocktails);
  const dispatch = useDispatch();

  // Variables
  const shouldShowBackButton = searchText.length === 0;
  const shouldShowCancelButton = searchText.length > 0;
  const shouldShowSearchTextLengthHint =
    searchText.length < 3 && cocktails.length === 0;
  const shouldShowNoCocktailsMessage =
    searchText.length >= 3 && cocktails.length === 0 && !loading;

  /**
   * Go back to previous page
   */
  const goBack = () => {
    navigation.goBack();
  };

  /**
   * Clears the text and the results
   */
  const cancelSearch = () => {
    dispatch({type: CLEAR_COCKTAILS_LIST});
    setSearchText('');
  };

  useEffect(() => {
    if (searchText.length < 3) return;

    setLoading(true);

    fetch(`${APIBaseURL}/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: UPDATE_COCKTAILS_LIST,
          payload: res?.drinks,
        });

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        Alert.alert(
          'Error',
          'It was not possible to fetch the drinks. Please check your network connection or try again later.',
          [
            {
              text: 'Close',
            },
          ],
        );
      });
  }, [searchText, dispatch]);

  return (
    <SafeAreaView edges={['top']} style={styles.safeAreaContainer}>
      <View style={styles.headerContainer}>
        {shouldShowBackButton && (
          <TouchableOpacity onPress={goBack}>
            <FontAwesomeIcon icon={faArrowLeft} size={18} />
          </TouchableOpacity>
        )}

        <View style={styles.searchBarContainer}>
          <FontAwesomeIcon color="grey" icon={faSearch} size={18} />

          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search"
            placeholderTextColor="grey"
            style={styles.searchBar}
          />
        </View>

        {shouldShowCancelButton && (
          <TouchableOpacity onPress={cancelSearch}>
            <Text style={styles.cancelButtonStyle}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      <CustomLinearGradient style={styles.rootContainer}>
        <ScrollView contentContainerStyle={styles.cocktailsContainer}>
          {loading && <ActivityIndicator color="white" size={80} />}

          {shouldShowNoCocktailsMessage && (
            <Text style={styles.hintTextStyles}>
              There are no cocktails with the name {searchText}.
            </Text>
          )}

          {shouldShowSearchTextLengthHint && (
            <Text style={styles.hintTextStyles}>
              Type at least three characters to search for drinks.
            </Text>
          )}

          {cocktails?.map((cocktail: CocktailModel) => {
            return (
              <CocktailComponent key={cocktail.idDrink} cocktail={cocktail} />
            );
          })}
        </ScrollView>
      </CustomLinearGradient>
    </SafeAreaView>
  );
};

export default SearchScreen;
