import React from 'react';
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
    TopicContainer
} from '../components/styles/screens/Code.js';

function getCodeString(blockPosition, selectedBlock) {
    var blockConfigs = Configuration[selectedBlock];
    var result = '';

    blockConfigs.blocks.forEach(function(config) {
        if (blockPosition.indexOf(config.position) > -1) {
            result += config.codeSnippet;
        }
    })

    return result;
}

const Code = () => {
    const {blockPosition, selectedBlock} = useSelector(state => state.blockReducer);
    const pageConfigs = Configuration[selectedBlock];
    const codeString = getCodeString(blockPosition, selectedBlock);

    return (
        <MainContainer>
            <TopicContainer>
                <MainText>{pageConfigs.topic}</MainText>
            </TopicContainer>

            <ContentContainer>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {codeString}
                </SyntaxHighlighter>
            </ContentContainer>
        </MainContainer>
    );
};

export default Code;