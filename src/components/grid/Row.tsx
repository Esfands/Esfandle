import Cell from './Cell';
import { Grid } from '@mui/material';

type Props = {
    guess: string
}

const Row = ({ guess }: Props) => {
    if (guess.length > 5) {guess = guess.slice(0,5)} //move this error handling laterS
    const remainder = Array.from(Array(5 - guess.length));
    return(
        <>
            {guess.split('').map((letter, i) => (<Grid item><Cell letter={letter} key={i} /></Grid>))}
            {remainder.map((_, i) => (<Grid item><Cell letter='' key={i} /></Grid>))}
        </>
    )
};

export default Row;