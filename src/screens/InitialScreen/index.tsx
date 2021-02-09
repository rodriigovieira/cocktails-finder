import {faCocktail, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomLinearGradient from '../../components/LinearGradient';
import {InitialScreenProps} from '../../types';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headline: {
    marginTop: 10,
    marginBottom: 25,
    flexDirection: 'row',
  },

  headlineText: {
    color: '#fff',
    fontSize: 24,
  },

  boldHeadlineText: {
    fontWeight: '700',
  },

  buttonContainer: {
    borderRadius: 8,
    backgroundColor: 'white',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    // Elevation effect
    shadowColor: '#3f3f3f',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },

  buttonText: {
    marginHorizontal: 35,
    textAlign: 'center',
    color: 'grey',
    fontSize: 18,
  },
});

const InitialScreen = ({navigation}: InitialScreenProps) => {
  /**
   * Navigates the user to the SearchScreen
   */
  const navigateToSearchScreen = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <CustomLinearGradient style={styles.rootContainer}>
      <FontAwesomeIcon color="#fff" size={48} icon={faCocktail} />

      <View style={styles.headline}>
        <Text style={[styles.headlineText, styles.boldHeadlineText]}>
          Cocktail
        </Text>
        <Text style={styles.headlineText}>Finder</Text>
      </View>

      <TouchableOpacity
        onPress={navigateToSearchScreen}
        style={styles.buttonContainer}
      >
        <FontAwesomeIcon size={24} color="#eb7395" icon={faSearch} />

        <Text style={styles.buttonText}>Search your favorite cocktail</Text>
      </TouchableOpacity>
    </CustomLinearGradient>
  );
};

export default InitialScreen;
