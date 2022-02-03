import { Paper } from '@mui/material';

type Props = {
    letter: string
};

const Cell = ({ letter }: Props) => {

    return (
        <Paper sx={{ height: 60, width: 60, fontWeight: "bold", fontSize: "2rem"}} style={{backgroundColor: "#1b2126", color: "white"}}>{letter}</Paper>
    )
};

export default Cell;