import {View, Image, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {Colors} from '../../constants';
import styled from 'styled-components';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const MainContainer = styled.View`
    background-color: ${Colors.white};
    width: 100%;
    height: 100%;
`;

export const TopicContainer = styled.View`
    width: 100%;
    height: 20%;
    padding-right: 5px;
    padding-left: 5px;
    padding-top: ${StatusBarHeight / 2}px;
    justify-content: center;
    background-color: ${Colors.darkPurple};
`;

export const ContentContainer = styled.View`
    padding: 5px;
    height: 80%;
    background-color: ${Colors.white};
    align-items: center;
    justify-content: center;
    flex: 1;
    ${'' /* flex-direction: 'row'; */}
`;

export const MainText = styled.Text`
    color: ${Colors.white};
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
    margin: 5px;
    width: 80%;
    height: 50px;
    ${(props) => `background-color: ${props.disabled ? Colors.lightGrey : props.color || Colors.darkPurple}`};
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;

    ${(props) => `color: ${props.color || Colors.white}`}
`;

export const BlocksContainer = styled.View`
    width: 100%;
    height: 60%;
`;