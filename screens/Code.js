import React from 'react';
import { SEPARATOR } from '../components/constants';
import {Configuration} from '../configuration';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
    MainContainer,
    MainText,
    ContentContainer,
    TopicContainer
} from '../components/styles/Common.js';

function getCodeString(blocks, selectedItems) {
    let result = '';

    blocks.forEach(function(config, blockIndex) {
        if (config.data) {
            let data = config.data;
            data.forEach((info, dataIndex) => {
                let key = [blockIndex, dataIndex].join(SEPARATOR);
                if (selectedItems.indexOf(key) > -1) {
                    result += info.codeSnippet;
                }
            })
        } else if (selectedItems.indexOf(blockIndex) > -1) {
            result += config.codeSnippet;
        }
    })

    return result;
}

const Code = ({route}) => {
    const props = route.params;
    const selectedItems = props.selectedItems;
    const pageConfigs = Configuration[props.pageName];

    const codeString = getCodeString(pageConfigs.blocks, selectedItems);

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