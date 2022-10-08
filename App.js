import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {

 const HandelClick = ()=>{
    Alert.alert('hello')

 
  }
    return (
    <View style={styles.container}>
      <Text >hello hicham</Text>
      
        
      <Button
        title="Press me"
        onPress={HandelClick}
          
        />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize:'20px' ,
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    color:'red',
    justifyContent: 'center',
    textShadowColor: 'red'
  
  },
  

 

  
});
