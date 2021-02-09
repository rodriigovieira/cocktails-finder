import {faCocktail, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomLinearGradient from '../../components/LinearGradient';
import {InitialScreenProps} from '../../types';
import {styles} from './styles';

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
