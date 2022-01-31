import Cell from './Cell';
import { Grid } from '@mui/material';

const Row = () => {

    return(
        <>
            <Grid item >
                <Cell/>
            </Grid>
            <Grid item >
                <Cell/>
            </Grid>
            <Grid item >
                <Cell/>
            </Grid>
            <Grid item >
                <Cell/>
            </Grid>
            <Grid item >
                <Cell/>
            </Grid>
        </>
    )
};

export default Row;