import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Table from './components/table';

export default  function App() {
const [name, setname] = useState("hicham");
const [age, setAge] = useState("21");

   handlePress=()=>{
      alert('hello')
  }

  return (
    
    <View style={styles.container}>
      <Text>Hello woèrld</Text>
      <Button onPress={handlePress} title='add' ></Button>
   
      <Table name={name} />
      <Table name={age} />
    </View>
  );
  


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

