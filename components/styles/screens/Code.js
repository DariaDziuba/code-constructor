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
    padding-top: ${StatusBarHeight + 24}px;
    justify-content: center;
    background-color: ${Colors.darkPurple};
`;

export const ContentContainer = styled.View`
    width: 100%;
    height: 80%;
    padding: 5px;
    background-color: ${Colors.white};
    align-items: center;
`;

export const MainText = styled.Text`
    color: ${Colors.white};
    text-align: center;
    font-size: 23px;
    font-weight: bold;
`;
