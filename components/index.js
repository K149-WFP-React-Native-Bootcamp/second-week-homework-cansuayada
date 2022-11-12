import React, {useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import {listStyles as styles} from './style.js';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const List = props => {

    const {data} = props;
    const {key} = props;
    
  useEffect(() => {
    console.log(data);
  }, [ data ]);

  
  const renderItem = ( {item, text} ) => {
    
        return (    
         <View style={styles.text}>
           <Text style={styles.itemText}>{item.text}</Text>
         </View>      
        );
    } 

    return(
        <View style={{flex:1/1.5, borderRadius:7}}>
    <FlatList 
    data={data}
    keyExtractor={(item, index) => item + index}
    renderItem={ renderItem }
    key= {key}
    style={styles.flatlist}
     />
   </View>

    )
}


List.propTypes = {
    data: PropTypes.array.isRequired} 

export {List}