import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {APIBaseURL} from '../../constants';
import {UPDATE_COCKTAILS_LIST} from '../../redux/types/CocktailsTypes';

export const useFetchCocktails = (searchText: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchText.length < 3) return;

    setLoading(true);

    fetch(`${APIBaseURL}/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: UPDATE_COCKTAILS_LIST,
          payload: res?.drinks ?? [],
        });

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        Alert.alert(
          'Error',
          'It was not possible to fetch the drinks. Please check your network connection or try again later.',
          [{text: 'Close'}],
        );
      });
  }, [searchText, dispatch]);

  return loading;
};
