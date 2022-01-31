import * as React from 'react';
import { Grid, Box } from '@mui/material';
import Row from './Row';

const GameGrid = () => {

  return (
    <Box sx={{ display:"grid", justifyContent:"center", alignItems:"center"}}>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid container item spacing={1} justifyContent="center" alignItems="center">
          <Row />
        </Grid>
        <Grid container item spacing={1} justifyContent="center" alignItems="center">
          <Row />
        </Grid>
        <Grid container item spacing={1} justifyContent="center" alignItems="center">
          <Row />
        </Grid>
        <Grid container item spacing={1} justifyContent="center" alignItems="center">
          <Row />
        </Grid>
        <Grid container item spacing={1} justifyContent="center" alignItems="center">
          <Row />
        </Grid>
        <Grid container item spacing={1} justifyContent="center" alignItems="center">
          <Row />
        </Grid>
      </Grid>
    </Box>
  );
}

export default GameGrid;
