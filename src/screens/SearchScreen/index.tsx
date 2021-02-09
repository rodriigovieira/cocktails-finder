import {faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import CocktailComponent from '../../components/CocktailComponent';
import CustomLinearGradient from '../../components/LinearGradient';
import {APIBaseURL} from '../../constants';
import {CocktailModel, SearchScreenProps} from '../../types';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  rootContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },

  cancelButtonStyle: {
    color: '#fa8282',
    fontSize: 20,
  },

  searchBarContainer: {
    width: '80%',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    borderRadius: 6,
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 10,
    marginTop: 5,
  },

  searchBar: {
    paddingHorizontal: 10,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBarText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'black',
  },

  cocktailsContainer: {
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },

  hintTextStyles: {
    fontSize: 18,
    color: 'white',
  },
});

const SearchScreen = ({navigation}: SearchScreenProps) => {
  const [cocktails, setCocktails] = useState<Array<CocktailModel>>([]);
  const [searchText, setSearchText] = useState<string>('');

  const shouldShowBackButton = searchText.length === 0;
  const shouldShowCancelButton = searchText.length > 0;

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
    setCocktails([]);
    setSearchText('');
  };

  useEffect(() => {
    if (searchText.length < 3) return;

    fetch(`${APIBaseURL}/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((res) => {
        setCocktails(res?.drinks ?? []);
      })
      .catch((e) => console.log(e));
  }, [searchText]);

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
          {cocktails.length === 0 && (
            <Text style={styles.hintTextStyles}>
              Type at least 3 characters to fetch the drinks.
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
