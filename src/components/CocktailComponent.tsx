import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {CocktailModel} from '../types';

type CocktailComponentProps = {
  cocktail: CocktailModel;
};

const styles = StyleSheet.create({
  cocktailContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    alignItems: 'center',
  },

  cocktailImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 20,
  },

  cocktailText: {
    fontSize: 20,
  },
});

const CocktailComponent = ({cocktail}: CocktailComponentProps) => {
  return (
    <View style={styles.cocktailContainer}>
      <Image
        style={styles.cocktailImage}
        source={{uri: cocktail.strDrinkThumb}}
      />
      <Text style={styles.cocktailText}>{cocktail.strDrink}</Text>
    </View>
  );
};

export default CocktailComponent;
