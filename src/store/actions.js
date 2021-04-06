import axios from 'axios';
import { FETCH_BREEDS_SUCCESS } from './actionTypes';

const fetchBreedsSuccess = (breeds) => ({
  type: FETCH_BREEDS_SUCCESS,
  payload: breeds,
});

export const fetchBreeds = () => async (dispatch) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');

    const data = [];

    Object.keys(response.data.message).forEach((breed) => {
      if (response.data.message[breed].length) {
        response.data.message[breed].forEach((subBreed) =>
          data.push({ breed, subBreed })
        );
      } else {
        data.push({ breed });
      }
    });

    dispatch(fetchBreedsSuccess(data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchImages = (dog) => async (dispatch) => {
  try {
    let response = [];

    if (dog.subBreed) {
      response = await axios.get(
        `https://dog.ceo/api/breed/${dog.breed}/${dog.subBreed}/images/random/3`
      );
    } else {
      response = await axios.get(
        `https://dog.ceo/api/breed/${dog.breed}/images/random/3`
      );
    }

    return response.data.message;
  } catch (e) {
    console.log(e);
  }
};
