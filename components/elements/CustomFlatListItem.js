import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { Colors } from '../constants';
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomFlatListItem = (props) => {
    const { item } = props;
    const [value, setValue] = useState(item.value);

    useEffect(() => {
        setValue(item.value);
    })

    const onClick = (position, subPosition) => {
        const newValue = !value;
        setValue(newValue);
        props.onListClick(position, subPosition, newValue);
    }

    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.childRow, styles.button, styles.container,
                    value ? styles.btnActive : styles.btnInActive
                ]}
                onPress={()=> onClick(props.position, props.subPosition)}
            >
                <Icon name={'check-box'} size={24} color={ value ? Colors.violet : Colors.lightGrey } />
                <View  style={[styles.textWrapper]}>
                <Text style={[styles.font, styles.itemInActive]}>
                    {item.key}
                </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.childHr}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    textWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'space-between',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
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
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: Colors.darkPurple,
        borderRadius: 7
    },
    childHr:{
        height:1,
        backgroundColor: Colors.lightGrey,
        width:'100%',
    }
});

export default CustomFlatListItem;