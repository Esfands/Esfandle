import Key from './Key';
import { KeyValue } from './KeyValue';

type Props = {
    onEnteredChar: (value: string) => void
}


const Keyboard = ({ onEnteredChar }: Props) => {

    const onKeyClick = (value: KeyValue) => {
        onEnteredChar(value);
    }

    return(
        <div style={{marginTop:"20px"}}>
            <div>
                <Key value="Q" clickAction={onKeyClick} />
                <Key value="W" clickAction={onKeyClick} />
                <Key value="E" clickAction={onKeyClick} />
                <Key value="R" clickAction={onKeyClick} />
                <Key value="T" clickAction={onKeyClick} />
                <Key value="Y" clickAction={onKeyClick} />
                <Key value="U" clickAction={onKeyClick} />
                <Key value="I" clickAction={onKeyClick} />
                <Key value="O" clickAction={onKeyClick} />
                <Key value="P" clickAction={onKeyClick} />
            </div>
            <div>
                <Key value="A"  clickAction={onKeyClick} />
                <Key value="S"  clickAction={onKeyClick} />
                <Key value="D"  clickAction={onKeyClick} />
                <Key value="F"  clickAction={onKeyClick} />
                <Key value="G"  clickAction={onKeyClick} />
                <Key value="H"  clickAction={onKeyClick} />
                <Key value="J"  clickAction={onKeyClick} />
                <Key value="K"  clickAction={onKeyClick} />
                <Key value="L"  clickAction={onKeyClick} />
            </div>
            <div>
                <Key value="Enter" clickAction={onKeyClick} />
                <Key value="Z" clickAction={onKeyClick} />
                <Key value="X" clickAction={onKeyClick} />
                <Key value="C" clickAction={onKeyClick} />
                <Key value="V" clickAction={onKeyClick} />
                <Key value="B" clickAction={onKeyClick} />
                <Key value="N" clickAction={onKeyClick} />
                <Key value="M" clickAction={onKeyClick} />
                <Key value="Delete" clickAction={onKeyClick} />
            </div>
        </div>
    )
};

export default Keyboard;