import React from 'react';
import {ScrollView, View} from 'react-native';
import { Colors } from '../components/constants';
import { Configuration } from '../configuration';

import {
    MainContainer,
    MainText,
    ContentContainer,
    TopicContainer,
    Button,
    ButtonText,
} from '../components/styles/Common.js';

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
                <MainText style={{fontSize: 36}}>Конфігуратор коду</MainText>
            </TopicContainer>
            <ContentContainer
                style={{
                    height: '80%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <ScrollView
                    contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}
                    style={{width: '100%', height: '100%'}}
                >
                    <View style={{ alignItems: 'center'}}>
                        {renderBlocks(onPress)}
                    </View>
                </ScrollView>
            </ContentContainer>
        </MainContainer>
    );
};

export default Start;