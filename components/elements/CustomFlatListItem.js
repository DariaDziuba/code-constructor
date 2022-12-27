import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { Colors } from '../constants';
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomFlatListItem = (props) => {
    const { item } = props;
    const [value, setValue] = useState(item.value);

    const onClick = (position, index) => {
        const newValue = !value;
        setValue(newValue);
        props.onListClick(position, index, newValue);
    }

    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.childRow, styles.button, styles.container,
                    item.value ? styles.btnActive : styles.btnInActive
                ]}
                onPress={()=> onClick(props.position, props.index)}
            >
                <Icon name={'check-box'} size={24} color={ item.value ? Colors.violet : Colors.lightGrey } />
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