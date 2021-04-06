import { Container } from '@material-ui/core';
import BreedsList from './components/BreedsList/BreedsList';

const App = () => {
  return (
    <Container maxWidth='lg'>
      <BreedsList />
    </Container>
  );
};

export default App;
