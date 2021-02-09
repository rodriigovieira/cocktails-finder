import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import CocktailComponent from '../../components/CocktailComponent';
import CustomLinearGradient from '../../components/LinearGradient';
import {APIBaseURL} from '../../constants';
import {CocktailModel} from '../../types';

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

  searchBarContainer: {
    width: '90%',
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
});

const SearchScreen = () => {
  const [cocktails, setCocktails] = useState<Array<CocktailModel>>([]);
  const [searchText, setSearchText] = useState<string>('');

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

      <CustomLinearGradient style={styles.rootContainer}>
        <ScrollView contentContainerStyle={styles.cocktailsContainer}>
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
