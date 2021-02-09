import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomLinearGradient from '../../components/LinearGradient';

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
});

const SearchScreen = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeAreaContainer}>
      <View style={styles.searchBarContainer}>
        <FontAwesomeIcon color="grey" icon={faSearch} size={18} />

        <TextInput
          placeholder="Search"
          placeholderTextColor="grey"
          style={styles.searchBar}
        />
      </View>

      <CustomLinearGradient style={styles.rootContainer}>
        <Text>oi</Text>
      </CustomLinearGradient>
    </SafeAreaView>
  );
};

export default SearchScreen;
