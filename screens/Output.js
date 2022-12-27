import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import Blocks from '../components/blocks/Blocks';

import {Colors} from '../components/constants';
import {Configuration} from '../configuration';
import {ConfigNames} from '../components/constants';
import {useSelector} from 'react-redux';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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

const Output = ({route}) => {
    const { pageName } = route.params;
    const pageConfigs = Configuration[pageName];

    return (
        <MainContainer>
            <TopicContainer>
                <MainText>{pageConfigs.topic}</MainText>
            </TopicContainer>
            <ContentContainer
                style={{
                    alignItems : 'stretch',
                    justifyContent : 'stretch'
                }}
            >
                <SyntaxHighlighter language="javascript" style={docco}>
                    {pageConfigs.consoleOutput}
                </SyntaxHighlighter>
            </ContentContainer>
        </MainContainer>
    );
};

export default Output;