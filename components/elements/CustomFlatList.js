import React from 'react';
import { View, FlatList} from "react-native";
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
                        subPosition={index}
                        item={item}
                    />
                }
            />
        </View>
    )
};

export default CustomFlatList;