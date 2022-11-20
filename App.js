import React, { useState, useEffect} from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import {appStyles as styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { List } from './components';

 function App()  {

  const [elem, setElem] = useState("");
  const [item, setItem] = useState([]);

  const handleClick = (value) => {
    console.log(elem)
    if( elem == "") {
      alert('please todo add')
     } else {
      const newList= [...item, { key: Date.now(), text: elem, isChecked: false }]
      /*newList.push({
        index: Date.now(),
        text: elem,
        completed:false,
      })*/
      setItem(newList)
      setElem("")
    }
  }
  

  return (
    <View style={styles.container}>
          <Text style={styles.baslik}>Todo App</Text>
      <View style={styles.textArea}>

      <TextInput style={styles.input}
       placeholder='Todo Add...'
       value={elem}    
       onChangeText={setElem}
       />

      <TouchableOpacity style={styles.btn} onPress={handleClick}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
      </View>

      <List data={item} key={Date.now()} />

    </View>  
  );
}

export default App;

