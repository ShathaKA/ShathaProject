import { TouchableOpacity,StyleSheet , Text } from "react-native";   
const Button =({pressHndler , children ,style}) =>{
    return(
        <TouchableOpacity 
         onPress= {pressHndler} 
         style={{...styles.button, ...style}}>
         
         
         
           <Text style={styles.buttontext}> {children}</Text>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#007AFF",
        paddingTop: 7,
        paddingBottom: 7
    
      },
    
      buttontext:{
        textAlign: "center",
        color: "white",
        fontSize: 16,
    
      }
});

export default Button;