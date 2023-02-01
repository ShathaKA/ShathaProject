import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View ,SafeAreaView, Platform, TouchableOpacity,Text} from 'react-native';
import {useState , useEffect} from "react";
import {Button , Layout} from '../components/index';
const Insert = ({navigation}) => {

    const [ question , setQuestion] = useState("");
    const [ answer , setAnswer] = useState("");
    const [ erorr , seterorr] = useState(false);


    const pressHndler =async () => {
      try{
        seterorr(false);

        await fetch("https://reactproject-1ae54-default-rtdb.firebaseio.com/questions.json",
        {
          method:"POST",
          body: JSON.stringify({
            answer,
            question,
          }),
        });

        const id = Math.floor(Math.random() * 500);
        navigation.navigate("home",{id });
      } catch (erorr){

        seterorr(true);
      }
       /*const id = Math.floor(Math.random() * 500);
      navigation.navigate("home",{id , answer , question});*/
        
      };

  return (
    <SafeAreaView style={styles.container}>
       <Layout>
          <TextInput 
          style={styles.input} 
          placeholder="insert Question" 
          onChangeText={setQuestion}
          value={question}
          />
          
          <TextInput 
          style={{...styles.input , height: 70 }}
          placeholder="insert Answer" multiline={true} 
          onChangeText={setAnswer}
          value={answer}
          
          />

          <Button pressHndler={pressHndler}>Insert Questions</Button>
          {erorr ? <Text> there ia an error from server</Text> : null}

      </Layout>
    
      
      <StatusBar style="auto" />

    </SafeAreaView>    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    paddingTop: Platform.OS ==="android" ? 40 : null,
   
     },
  input: {
    height:40,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10
  },
 
 
});

export default Insert