import React, {useState} from 'react';
import { FlatList, View} from 'react-native';

import {Colors} from '../components/constants';
import {Configuration} from '../configuration';
import {ConfigNames} from '../components/constants';
import Accordion from '../components/elements/Acordion';

import {
    MainContainer,
    MainText,
    ContentContainer,
    TopicContainer,
    Button,
    ButtonText,
    BlocksContainer
} from '../components/styles/screens/FirstLab.js';

const renderAccordians = (blocks, selectedPoints, setSelectedPoints, setAllChecked) => {
    const items = [];
    blocks.forEach((item, index) => {
        let test = item.data && JSON.stringify(item.data);
        items.push(
            <Accordion
                key = {index}
                position = {item.position}
                title = {item.title}
                data = {test && JSON.parse(test)}
                setSelectedPoints={setSelectedPoints}
                selectedPoints={selectedPoints}
                setAllChecked={setAllChecked}
            />
        );
    });
    return items;
}

const VirtualizedList = ({children}) => {
    return (
        <FlatList
            data={[]}
            renderItem={null}
            ListHeaderComponent={
                <>{children}</>
            }
        />
    )
}

const Configurator = function ({route, navigation}) {
    const { pageName } = route.params;
    const pageConfigs = Configuration[pageName];
    const [selectedPoints, setSelectedPoints] = useState([]);
    const [allChecked, setAllChecked] = useState([]);

    return (
        <MainContainer>
            <TopicContainer>
                <MainText>{pageConfigs.topic}</MainText>
            </TopicContainer>

            <ContentContainer>
                <BlocksContainer style={{height: '60%', width: '100%'}}>
                    <VirtualizedList>
                        { renderAccordians(pageConfigs.blocks || [], selectedPoints, setSelectedPoints, setAllChecked, allChecked) }
                    </VirtualizedList>
                </BlocksContainer>
                <View style={{height: '40%', width: '100%', alignItems: 'center'}}>
                    <Button
                        disabled={!selectedPoints.length}
                        onPress={() => navigation.navigate('Code', {selectedPoints: selectedPoints, pageName: pageName})}
                    >
                        <ButtonText disabled={!selectedPoints.length}>Переглянути</ButtonText>
                    </Button>
                    <Button disabled={allChecked.length !== pageConfigs.blocks.length} color={Colors.white} onPress={() => navigation.navigate('Output', {pageName: pageName})}>
                        <ButtonText disabled={allChecked.length !== pageConfigs.blocks.length} color={Colors.darkPurple}>Запуск коду</ButtonText>
                    </Button>
                </View>
            </ContentContainer>
        </MainContainer>
    );
};

export default Configurator;