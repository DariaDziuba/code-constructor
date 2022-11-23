import React, {useState} from 'react';
import Checkbox from 'expo-checkbox';
import {Colors} from '../constants';
import {RecordContainer, CheckboxContainer, CheckboxText} from '../styles/elements/CustomCheckbox';

const CustomCheckbox = (props) => {
    const [isChecked, setChecked] = useState(props.value || false);
    const [keyValue] = useState(props.position);

    const onChange = () => {
        const newValue = !isChecked;
        props.onChangeValue(newValue, keyValue);
        setChecked(newValue);
    };

    return (
        <RecordContainer>
            <CheckboxContainer>
                <Checkbox
                    value={isChecked || false}
                    onValueChange={onChange}
                    disabled={props.disabled}
                    color={props.color || Colors.black}
                />
            </CheckboxContainer>
            <CheckboxText textColor={props.textColor || Colors.black}>{props.title}</CheckboxText>
        </RecordContainer>
    )
}

export default CustomCheckbox;