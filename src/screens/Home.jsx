import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View ,SafeAreaView, Platform, TouchableOpacity,Text} from 'react-native';
import {useState , useEffect} from "react";
import {Button , QuestionList ,QuestionBox , Layout} from '../components/index';
  
const Home =({navigation , route}) => {

  const params = route.params;
  const [questions , setQuestions] = useState([
    {id:1 , question :"this is first question" , answer:"this is first answer"},
    {id:2 , question :"this is second question" , answer:"this is second answer"},
]);

const deleteRecored =(id) =>{
  const deleteItem =questions.filter((el) => el.id !== id);

   setQuestions(deleteItem);
  }

/*useEffect(() => {
  
  if(params && Object.keys(params).length > 0)
{
  setQuestions([...questions , {...params}])
}

} , [params] )*/


useEffect(() => {
 const connectAPI = async () => {
  try{

    const response = await fetch(
      "https://reactproject-1ae54-default-rtdb.firebaseio.com/questions.json"
     );
     const data = await response.json();
     const fullData =[];
     for(const key in data){
      fullData.push({
        id: key,
        question: data[key].question,
        answer: data[key].answer,
      });
     }
     setQuestions(fullData);
     console.log(data)
  }
  catch(erorr){
    console.log(erorr)
  }
 };
 connectAPI();
} , [params] )





return (
  <SafeAreaView style={styles.container}>
    
  <Layout>
    <View>
    <QuestionList questions={questions} deleteRecored={deleteRecored}/>
      <Button pressHndler={() => {navigation.navigate("insert")}}>Insert New Questions</Button>

    </View>
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

export default Home;