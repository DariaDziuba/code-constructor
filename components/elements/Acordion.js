import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import { Colors } from '../constants';
import { SEPARATOR } from '../constants';
import CustomFlatList from './CustomFlatList';
import Icon from "react-native-vector-icons/MaterialIcons";

function processCheckedBlocks(position, value, setCheckedBlocks) {
    setCheckedBlocks(oldArray => value
        ? [...oldArray, position]
        : oldArray.filter((item) => item !== position) || []);
}

function toggleExpand(setExpanded) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(oldValue => !oldValue);
}

const Accordion = (props) => {
    const position = props.position;
    const {selectedItems, setSelectedItems } = props;
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState(props.data);
    const [isBlockChecked, setBlockChecked] = useState(data
        ? data.slice().every((item) => item.value)
        : selectedItems.indexOf(position) > -1);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    /**
     * Process all subitems and set value
     * @param {boolean|undefined} value - value which should be set
     */
    const processAllSubItems = (value) => {
        const items = data && data.slice();
        const newValue = typeof value === 'boolean' ? value : !isBlockChecked;
        if (!items) {
            setBlockChecked(newValue);
            processCheckedBlocks(position, newValue, props.setCheckedBlocks);
            processSelectedPoints(newValue, position);
            return;
        }

        Object.keys(items).forEach((key, subPosition) => {
            processSelectedPoints(newValue, position, subPosition);
            items[key].value = newValue;
        });

        setData(items);
        setBlockChecked(newValue);
        processCheckedBlocks(position, newValue, props.setCheckedBlocks);
    }

    const isAllChecked = () => {
        const items = data.slice();
        const isAllChecked = items.every((item) => {
            return item.value;
        });

        setBlockChecked(isAllChecked);
        processCheckedBlocks(position, isAllChecked, props.setCheckedBlocks);
    }

    const processSelectedPoints = (newValue, position, subPosition) => {
        setSelectedItems(previoslySelected => {
                const key = typeof position === 'number' && typeof subPosition === 'number'
                    ? [position, subPosition].join(SEPARATOR) : position;
                let result = previoslySelected;

                if (newValue) {
                    result = previoslySelected.indexOf(key) > -1
                        ? previoslySelected : previoslySelected.concat(key);
                } else {
                    result = previoslySelected.filter(function(value) {
                        return value !== key;
                    });
                }

                return result;
        })
    }

    const subItemOnClick = (position, subPosition, value) => {
        const info = data && data.slice();
        const newValue = typeof value === 'boolean' ? value : !isBlockChecked;

        processSelectedPoints(newValue, position, subPosition);

        info[subPosition].value = !info[subPosition].value
        setData(info)
        isAllChecked();
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.row}
                onPress={()=> processAllSubItems()}
            >
                <Icon
                    name={data ? 'library-add-check' : 'check-box'}
                    size={24}
                    color={isBlockChecked ? Colors.lightPurple : Colors.lightGrey}
                />
                <Text style={[styles.title]}>{props.title}</Text>
                <View>
                    {
                        data &&
                        <TouchableOpacity style={styles.row} onPress={() => toggleExpand(setExpanded)}>
                            <Icon
                                name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                                size={25} color={Colors.lightGrey}
                            />
                        </TouchableOpacity>
                    }
                </View>
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                expanded &&
                    <CustomFlatList
                        data={data}
                        position={position}
                        onListClick={subItemOnClick}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        flex:1,
        fontWeight:'bold',
        color: Colors.white,
        paddingLeft: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent:'center',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems:'center',
        backgroundColor: Colors.violet,
        borderRadius: 7
    },
    parentHr:{
        height:1,
        color: Colors.white,
        width:'100%'
    }
});

export default Accordion;