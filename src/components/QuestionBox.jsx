
import {Text, View, StyleSheet  } from 'react-native';
import Button from '../components/Button';
const QuestionBox = ({question,answer,id , deleteRecored}) => {

  const deleteHandler = () => {
    deleteRecored(id)
  }

 

  

return(
<View style={styles.box}>
    <Text style={{ fontsize: 10 , marginBottom:15 }}> Questions: {question}</Text>
    <Text  style={{fontsize: 10 }}>Answer: {answer}</Text>
   <View style={styles.btnCTRL}>
   <Button style={{backgroundColor:"red" ,width:100 }} 
   pressHndler={deleteHandler}>Delete</Button>
   </View>
  </View>
);

}

const styles = StyleSheet.create({
   
    box:{
      borderStyle:"solid",
      borderColor: "black",
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      marginTop: 5,
      marginBottom: 5
    },
  btnCTRL: {
    display: "flex",
    flexDirection:"row",
    justifyContent:'flex-end'
  }
  });

export default QuestionBox;