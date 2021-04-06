import {
  Button,
  Grid,
  GridList,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchImages } from '../../store/actions';

const useStyles = makeStyles({
  gridList: {
    flexWrap: 'nowrap',
  },
});

const BreedItem = ({ dog }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [isFetchEnd, setIsFetchEnd] = useState(true);

  const handleFetchImages = () => {
    setIsFetchEnd(false);
    dispatch(fetchImages(dog)).then((response) => {
      setImages(response);
      setIsFetchEnd(true);
    });
  };

  return (
    <Grid item container alignItems='center' direction='row' spacing={2}>
      <Grid item md={2}>
        <Typography>
          {dog.subBreed ? `${dog.breed} ${dog.subBreed}` : dog.breed}
        </Typography>
      </Grid>
      <Grid item md={2}>
        <Button
          disabled={!isFetchEnd}
          variant='contained'
          color='primary'
          onClick={handleFetchImages}>
          {images.length ? 'Обновить' : 'Показать'}
        </Button>
      </Grid>
      <Grid item md={8}>
        <GridList className={classes.gridList} cols={2.5}>
          {images.map((url, i) => (
            <img
              key={`${url}_${i}`}
              src={url}
              alt={dog.subBreed ? `${dog.breed} ${dog.subBreed}` : dog.breed}
            />
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
};

export default BreedItem;
