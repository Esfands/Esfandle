import { Button } from '@mui/material';
import { KeyValue } from './KeyValue'

type Props = {
    value: KeyValue
    clickAction: any
};

const Key = ({ value, clickAction }: Props) => {

    const clickKey: React.MouseEventHandler<HTMLButtonElement> = ( event ) => {
        clickAction(value);
    };

    return (
        <Button variant="outlined" sx={{height: "58px", margin: "0 6px 6px 0"}} onClick={clickKey}>{value}</Button>
    )
};

export default Key;