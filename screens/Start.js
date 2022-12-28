import React from 'react';
import { Colors } from '../components/constants';
import { Configuration } from '../configuration';
import { setSelectedBlock } from '../redux/actions';
import { useDispatch } from 'react-redux';

import {
    MainContainer,
    MainText,
    ContentContainer,
    TopicContainer,
    Button,
    ButtonText,
} from '../components/styles/screens/Start.js';

function renderBlocks(onPress) {
    return Object.keys(Configuration).map(function (pageName) {
        const lab = Configuration[pageName];
        if (lab.show) {
            return (
                <Button
                    color={Colors.violet}
                    onPress={() => onPress(pageName)} key={pageName}
                >
                    <ButtonText>
                        {lab.title}
                    </ButtonText>
                </Button>
            )
        }
    });
}

const Start = ({ navigation }) => {
    const onPress = (pageName) => {
        navigation.navigate('Configurator', { pageName: pageName });
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