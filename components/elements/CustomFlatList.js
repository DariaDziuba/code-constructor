import React from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet} from "react-native";
import { Colors } from '../constants';
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomFlatListItem from './CustomFlatListItem';

const CustomFlatList = (props) => {
    return (
        <View style={{}}>
            <FlatList
                data={props.data}
                listKey={(item, index) => `_key${index.toString()}`}
                numColumns={1}
                scrollEnabled={true}
                renderItem={({item, index}) =>
                    <CustomFlatListItem
                        onListClick={props.onListClick}
                        position={props.position}
                        item={item}
                        index={index}
                        allChecked={props.allChecked}
                    />
                }
            />
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
    title:{
        fontSize: 14,
        flex:1,
        fontWeight:'bold',
        color: Colors.white
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
    row:{
        flexDirection: 'row',
        justifyContent:'center',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.violet,
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: Colors.darkPurple,
        borderRadius: 7
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

export default CustomFlatList;