import { Grid, Box } from '@mui/material';
import Row from './Row';

type Props = {
  guess: string
  totalGuesses: string[]
}

const GameGrid = ({ guess, totalGuesses }: Props) => {

  const emptyRows = Array.from(Array(5 - totalGuesses.length));

  return (
    <Box sx={{ display:"grid", justifyContent:"center", alignItems:"center"}}>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {totalGuesses.map((guessed, i) => (
          <Grid container item spacing={1} justifyContent="center" alignItems="center">
            <Row guess={guessed}/>
          </Grid>
        ))}
        <Grid container item spacing={1} justifyContent="center" alignItems="center">
          <Row guess={guess}/>
        </Grid>
        {emptyRows.map((_, i) => (
          <Grid container item spacing={1} justifyContent="center" alignItems="center">
            <Row guess=''/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GameGrid;
