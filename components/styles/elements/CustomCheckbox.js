import {View, Image, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {Colors} from '../../constants';
import styled from 'styled-components';

export const RecordContainer = styled.View`
    width: 100%;
    height: 10%;
    flex-direction: row;
    align-items: center;
    margin: 5px;
    background-color: ${Colors.white};
`;

export const CheckboxContainer = styled.View`
    margin: 8px;
    padding: 2px;
    width: 25px;
`;

export const CheckboxText = styled.Text`
    font-size: 18px;
    ${(props) => `color: ${props.textColor || Colors.black};`}
`;
