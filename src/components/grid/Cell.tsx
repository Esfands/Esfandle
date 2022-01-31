import { Paper } from '@mui/material';

const Cell = () => {

    return (
        <Paper sx={{ height: 60, width: 60, fontWeight: "bold", fontSize: "2rem"}} style={{backgroundColor: "#1b2126", color: "white"}}></Paper>
    )
};

export default Cell;