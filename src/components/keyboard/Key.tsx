import { Button } from '@mui/material';
import { KeyValue } from './KeyValue'

type Props = {
    value: KeyValue
};

const Key = ({ value }: Props) => {
    return (
        <Button variant="outlined">{value}</Button>
    )
};

export default Key;