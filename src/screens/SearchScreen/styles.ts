import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    marginHorizontal: 20,
    textAlign: 'center',
  },
});
