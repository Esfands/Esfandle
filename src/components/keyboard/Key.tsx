import { Button } from '@mui/material';
import { KeyValue } from './KeyValue'

type Props = {
    value: KeyValue
};

const Key = ({ value }: Props) => {
    return (
        <Button variant="outlined" sx={{height: "58px", margin: "0 6px 6px 0"}}>{value}</Button>
    )
};

export default Key;