import React from 'react';
import {Configuration} from '../configuration';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
    MainContainer,
    MainText,
    ContentContainer,
    TopicContainer
} from '../components/styles/Common.js';

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
                    alignItems : 'stretch'
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