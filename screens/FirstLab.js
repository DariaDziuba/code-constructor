import React from 'react';
import Blocks from '../components/blocks/Blocks';

import {Colors} from '../components/constants';
import {Configuration} from '../configuration';
import {ConfigNames} from '../components/constants';
import {useSelector} from 'react-redux';

const pageName = ConfigNames.FIRST_LAB;
const pageConfigs = Configuration[pageName];

import {
    MainContainer,
    MainText,
    ContentContainer,
    TopicContainer,
    Button,
    ButtonText,
    BlocksContainer
} from '../components/styles/screens/FirstLab.js';

const FirstLab = ({navigation}) => {
    const {disabledViewButton, disabledExecuteButton} = useSelector(state => state.buttonReducer);
    const {selectedBlock} = useSelector(state => state.blockReducer);

    return (
        <MainContainer>
            <TopicContainer>
                <MainText>{pageConfigs.topic}</MainText>
            </TopicContainer>

            <ContentContainer>
                <BlocksContainer>
                    <Blocks configName={pageName}/>
                </BlocksContainer>
                <Button disabled={disabledViewButton} onPress={() => navigation.navigate('Code')}>
                    <ButtonText disabled={disabledViewButton}>Переглянути</ButtonText>
                </Button>
                <Button disabled={disabledExecuteButton} color={Colors.white} onPress={() => navigation.navigate('Output')}>
                    <ButtonText disabled={disabledExecuteButton} color={Colors.darkPurple}>Запуск коду</ButtonText>
                </Button>
            </ContentContainer>
        </MainContainer>
    );
};

export default FirstLab;