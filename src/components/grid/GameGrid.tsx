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
            <Row guess={guessed} key={i} />
          </Grid>
        ))}
        <Grid container item spacing={1} justifyContent="center" alignItems="center">
          <Row guess={guess} key={totalGuesses.length + 1}/>
        </Grid>
        {emptyRows.map((_, i) => (
          <Grid container item spacing={1} justifyContent="center" alignItems="center">
            <Row guess='' key={i}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GameGrid;
