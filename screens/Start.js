import React from 'react';
import {Colors} from '../components/constants';
import {Configuration} from '../configuration';
import {setSelectedBlock} from '../redux/actions';
import {useDispatch} from 'react-redux';

import {
    MainContainer,
    MainText,
    ContentContainer,
    TopicContainer,
    Button,
    ButtonText,
    BlocksContainer
} from '../components/styles/screens/Start.js';

function renderBlocks(onPress) {
    return Object.keys(Configuration).map(function(configName) {
        const lab = Configuration[configName];
        if (lab.show) {
            return (
                <Button color={Colors.violet} onPress={() => onPress(lab.screenName, configName)} key={configName}>
                    <ButtonText>{lab.title}</ButtonText>
                </Button>
            )
        }
    });
}

const Start = ({navigation}) => {
    const dispatch = useDispatch();

    const onPress = (screenName, blockName) => {
        dispatch(setSelectedBlock(blockName));
        navigation.navigate(screenName);
    };

    return (
        <MainContainer>
            <TopicContainer>
                <MainText>Паралельні та розподілені обчислення</MainText>
            </TopicContainer>
            <ContentContainer>
                {renderBlocks(onPress)}
            </ContentContainer>
        </MainContainer>
    );
};

export default Start;