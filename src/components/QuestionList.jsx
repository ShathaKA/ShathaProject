import { View, Text } from 'react-native'
import React from 'react'
import QuestionBox from './QuestionBox';
const QuestionList = ({questions , deleteRecored}) => {
    const list = questions.length >0 ? 
    (questions.map((el) => (<QuestionBox 
      question ={el.question} 
      answer={el.answer}
       id={el.id}
       key={el.id}
       deleteRecored={deleteRecored}
       />))
    
    ) : (
    <View style={{ marginTop: 10 , marginBottom: 10}}>
      <Text style={{ fontsize: 16 , textAlign:"center"}}> There is no recored !</Text>
    </View>
    );
    


  return (
    <View>
      {list}
    </View>
  )
}

export default QuestionList