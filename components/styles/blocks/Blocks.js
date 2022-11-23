import {View, Image, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {Colors} from '../../constants';
import styled from 'styled-components';

export const MainContainer = styled.View`
    background-color: ${Colors.white};
    width: 100%;
    height: 100%;
`;

export const TopicContainer = styled.View`
    width: 100%;
    height: 10%;
    padding: 3px;
`;

export const SubText = styled.Text`
    color: ${Colors.darkPurple};
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;

export const ContentContainer = styled.View`
    width: 100%;
    height: 100%;
    padding: 5px;
    flex: 1;
    justify-content: start;
    align-items: center;
`;