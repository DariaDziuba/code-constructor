import React, {useState} from 'react';
import { FlatList, View} from 'react-native';

import {Colors} from '../components/constants';
import {Configuration} from '../configuration';
import Accordion from '../components/elements/Acordion';

import {
    MainContainer,
    MainText,
    ContentContainer,
    TopicContainer,
    Button,
    ButtonText,
    BlocksContainer
} from '../components/styles/Common.js';

const renderAccordians = (blocks, selectedItems, setSelectedItems, setCheckedBlocks) => {
    const items = [];
    blocks.forEach((item, index) => {
        const stringifiedData = item.data && JSON.stringify(item.data);
        const data = stringifiedData && JSON.parse(stringifiedData);
        items.push(
            <Accordion
                key = {index}
                position = {item.position}
                title = {item.title}
                data = {data}
                setSelectedItems={setSelectedItems}
                selectedItems={selectedItems}
                setCheckedBlocks={setCheckedBlocks}
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
    const [selectedItems, setSelectedItems] = useState([]);
    const [checkedBlocks, setCheckedBlocks] = useState([]);

    return (
        <MainContainer>
            <TopicContainer>
                <MainText>{pageConfigs.topic}</MainText>
            </TopicContainer>

            <ContentContainer>
                <BlocksContainer style={{height: '60%', width: '100%'}}>
                    <VirtualizedList>
                        { renderAccordians(pageConfigs.blocks || [], selectedItems, setSelectedItems, setCheckedBlocks) }
                    </VirtualizedList>
                </BlocksContainer>
                <View style={{height: '40%', width: '100%', alignItems: 'center'}}>
                    <Button
                        disabled={!selectedItems.length}
                        onPress={() => navigation.navigate('Code', {selectedItems: selectedItems, pageName: pageName})}
                    >
                        <ButtonText disabled={!selectedItems.length}>Переглянути</ButtonText>
                    </Button>
                    <Button disabled={checkedBlocks.length !== pageConfigs.blocks.length} color={Colors.white} onPress={() => navigation.navigate('Output', {pageName: pageName})}>
                        <ButtonText disabled={checkedBlocks.length !== pageConfigs.blocks.length} color={Colors.darkPurple}>Запуск коду</ButtonText>
                    </Button>
                </View>
            </ContentContainer>
        </MainContainer>
    );
};

export default Configurator;