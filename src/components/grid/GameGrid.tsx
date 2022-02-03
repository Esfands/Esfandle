import { Grid, Box } from '@mui/material';
import Row from './Row';

type Props = {
  guess: string
  totalGuesses: string[]
}

const GameGrid = ({ guess, totalGuesses }: Props) => {

  const emptyRows = Array.from(Array(6 - totalGuesses.length));

  return (
    <Box sx={{ display:"grid", justifyContent:"center", alignItems:"center"}}>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {totalGuesses.map((_, i) => (
          <Grid container item spacing={1} justifyContent="center" alignItems="center">
            <Row guess={guess}/>
          </Grid>
        ))}
        //current guess? also should prevent empty rows from rendering if on final guess
        {emptyRows.map((_, i) => (
          <Grid container item spacing={1} justifyContent="center" alignItems="center">
            <Row guess={guess}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GameGrid;
