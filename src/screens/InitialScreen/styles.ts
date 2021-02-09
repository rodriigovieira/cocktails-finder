import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
