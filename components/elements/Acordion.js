import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import { Colors } from '../constants';
import { SEPARATOR } from '../constants';
import CustomFlatList from './CustomFlatList';
import Icon from "react-native-vector-icons/MaterialIcons";

function processCheckedItem(position, value, setAllChecked) {
    if (value) {
        setAllChecked(oldArray =>  [...oldArray, position]);
    } else {
        setAllChecked(oldArray => oldArray.filter((item) => {
            return item !== position;
        }) || []);
    }
}

const Accordion = (props) => {
    const position = props.position;
    const {selectedPoints, setSelectedPoints }= props;
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState(props.data);
    const [allChecked, setAllChecked] = useState(data
        ? data.slice().every((item) => item.value)
        : selectedPoints.indexOf(position) > -1);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const processAllSubItems = (value) => {
        const items = data && data.slice();
        const newValue = typeof value === 'boolean' ? value : !allChecked;
        if (!items) {
            setAllChecked(newValue);
            processCheckedItem(position, newValue, props.setAllChecked);
            processSelectedPoints(newValue, position);
            return;
        }

        Object.keys(items).forEach((key, index) => {
            processSelectedPoints(newValue, position, index);
            items[key].value = newValue;
        });
        setData(items);
        setAllChecked(newValue);
        processCheckedItem(position, newValue, props.setAllChecked);
    }

    const isAllChecked = () => {
        const items = data.slice();
        const isAllChecked = items.every((item) => {
            return item.value;
        });

        setAllChecked(isAllChecked);
    }

    const processSelectedPoints = (newValue, position, subPosition) => {
        setSelectedPoints(selectedPoints =>  {
                const key = typeof position === 'number' && typeof subPosition === 'number'
                    ? [position, subPosition].join(SEPARATOR) : position;
                let result = selectedPoints;

                if (newValue) {
                    result = selectedPoints.indexOf(key) > -1 ? selectedPoints : selectedPoints.concat(key);
                } else {
                    result = selectedPoints.filter(function(value) {
                        return value !== key;
                    });
                }

                return result;
        })
    }

    const onClick = (position, subPosition, value) => {
        const info = data && data.slice();
        const newValue = typeof value === 'boolean' ? value : !allChecked;

        processSelectedPoints(newValue, position, subPosition);

        info[subPosition].value = !info[subPosition].value
        setData(info)
        isAllChecked();
    }

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
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
                    color={allChecked ? Colors.darkPurple : Colors.lightGrey}
                />
                <Text style={[styles.title]}>{props.title}</Text>
                <View>
                    {
                        data &&
                        <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
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
                        onListClick={onClick}
                        allChecked={allChecked}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWrapper: {
        maxWidth: '80%'
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'space-between',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
    },
    title: {
        fontSize: 14,
        flex:1,
        fontWeight:'bold',
        color: Colors.white,
        paddingLeft: 10
    },
    itemActive:{
        fontSize: 12,
        color: Colors.green,
    },
    itemInActive:{
        fontSize: 12,
        color: Colors.white,
    },
    btnActive:{
        borderColor: Colors.green,
    },
    btnInActive:{
        borderColor: Colors.grey,
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
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: Colors.darkPurple,
    },
    parentHr:{
        height:1,
        color: Colors.white,
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: Colors.lightGrey,
        width:'100%',
    },
    colorActive:{
        borderColor: Colors.green,
    },
    colorInActive:{
        borderColor: Colors.grey,
    }
});

export default Accordion;