import { Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBreeds } from '../../store/actions';
import BreedItem from '../BreedItem/BreedItem';

const BreedsList = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breeds);

  useEffect(() => dispatch(fetchBreeds()), [dispatch]);

  return (
    <Grid container spacing={2}>
      {breeds.map((breed, i) => (
        <BreedItem key={`${breed}_${i}`} dog={breed} />
      ))}
    </Grid>
  );
};

export default BreedsList;
