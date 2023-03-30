import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton.component";

const GameScreen = () => {
  return(
    <View style={styles.inputContainer}>
        <TextInput 
          style={styles.numberInput} 
          maxLength={2} 
          keyboardType="number-pad" 
        />
        <View style={styles.buttonsContainer}>
           <View style={styles.buttonContainer}>
              <PrimaryButton>Reset</PrimaryButton>
           </View>
           <View style={styles.buttonContainer}>
              <PrimaryButton>Confirm!</PrimaryButton>
           </View>
        </View>
    </View>
  )
};

export default GameScreen;


/* --- Style --- */
const styles = StyleSheet.create({
  inputContainer:{
    justifyContent:"center",
    alignItems:"center",
    padding: 16,
    marginTop: 100,
    marginHorizontal:24,
    backgroundColor:'#4e0329',
    borderRadius:8,
    elevation: 4,
    shadowColor:"black",
    shadowOffset:{ width:0, height: 5},
    shadowRadius:6,
    shadowOpacity:0.3
  },
  numberInput:{
    width:"20%",
    height:50,
    fontSize:32,
    borderBottomColor:"#ddb52f",
    borderBottomWidth:2,
    color:"#ddb52f",
    marginVertical:8,
    fontWeight:'bold',
    textAlign:"center"
  },
  buttonsContainer:{
    flexDirection:"row",
  },
  buttonContainer:{
    flex:1
  }
});

