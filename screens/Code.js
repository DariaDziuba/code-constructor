import React from 'react';
import Blocks from '../components/blocks/Blocks';

import {Colors} from '../components/constants';
import { SEPARATOR } from '../components/constants';
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

function getCodeString(blocks, selectedPoints) {
    let result = '';

    blocks.forEach(function(config, blockIndex) {
        if (config.data) {
            let data = config.data;
            data.forEach((info, dataIndex) => {
                let key = [blockIndex, dataIndex].join(SEPARATOR);
                if (selectedPoints.indexOf(key) > -1) {
                    result += info.codeSnippet;
                }
            })
        } else if (selectedPoints.indexOf(blockIndex) > -1) {
            result += config.codeSnippet;
        }
    })

    return result;
}

const Code = ({route}) => {
    const props = route.params;
    const selectedPoints = props.selectedPoints;
    const pageConfigs = Configuration[props.pageName];

    const codeString = getCodeString(pageConfigs.blocks, selectedPoints);

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
                    {codeString}
                </SyntaxHighlighter>
            </ContentContainer>
        </MainContainer>
    );
};

export default Code;