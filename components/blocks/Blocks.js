import React from 'react';
import CustomCheckbox from '../elements/CustomCheckbox';
import {Colors} from '../constants';
import {Configuration} from '../../configuration';
import {useSelector, useDispatch} from 'react-redux';
import {setBlockPosition, setDisabledViewButton, setDisabledExecuteButton} from '../../redux/actions';

import {
    MainContainer,
    ContentContainer,
    TopicContainer,
    SubText
} from '../styles/blocks/Blocks.js';

function getBlocksConfiguration(configName, onChange, blockPosition) {
    var shownConfigs = Configuration[configName];
    if (!shownConfigs) {
        return [];
    }

    return shownConfigs.blocks.map(function (block) {
        return (
            <CustomCheckbox
                title={block.title}
                textColor={block.color}
                onChangeValue={onChange}
                key={block.position}
                color={block.color}
                position={block.position}
                value={blockPosition.indexOf(block.position) > -1}
            />
        );
    })
}

const Blocks = (props) => {
    const {blockPosition} = useSelector(state => state.blockReducer);
    const blocks = Configuration[props.configName].blocks;
    const dispatch = useDispatch();

    const onChangeCheckbox = (value, keyValue) => {
        const newBlockPosition = value ? blockPosition.concat(keyValue) : blockPosition.filter(function(value) {
            return value !== keyValue;
        });

        dispatch(setBlockPosition(newBlockPosition));
        dispatch(setDisabledViewButton(!newBlockPosition.length));
        dispatch(setDisabledExecuteButton(newBlockPosition.length < blocks.length));
    };

    return (
        <MainContainer>
            <TopicContainer>
                <SubText>Вибір блоків</SubText>
            </TopicContainer>
            <ContentContainer>
                { getBlocksConfiguration(props.configName, onChangeCheckbox, blockPosition) }
            </ContentContainer>
        </MainContainer>
    );
};

export default Blocks;