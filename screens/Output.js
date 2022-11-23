import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import Blocks from '../components/blocks/Blocks';

import {Colors} from '../components/constants';
import {Configuration} from '../configuration';
import {ConfigNames} from '../components/constants';
import {useSelector} from 'react-redux';

import {
    MainContainer,
    MainText,
    ContentContainer,
    TopicContainer,
    CustomImage
} from '../components/styles/screens/Output.js';

const styles = StyleSheet.create({
    image: {
        width: '100vw',
        height: '100vh',
        resizeMode: 'cover'
    }
})

const Output = () => {
    const {selectedBlock} = useSelector(state => state.blockReducer);
    const pageConfigs = Configuration[selectedBlock];
    const imagePath = './../assets/console/' + pageConfigs.consoleOutput;
    console.log(imagePath)

    return (
        <MainContainer>
            <TopicContainer>
                <MainText>{pageConfigs.topic}</MainText>
            </TopicContainer>
            <ContentContainer>
                <Image source={require('./../assets/console/lab1.png')} />
            </ContentContainer>
        </MainContainer>
    );
};

export default Output;