import { useState, useEffect } from "react";
import {  View, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';



/* -- COMPONENTS --  */
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton.component";
import TextInstruction from "../components/ui/TextInstruction";


/* --- Generate Random Number --  */
const generateRandomBetween = (min,max,exclude) => {
  const rndNumb = Math.floor(Math.random() * (max-min)) + min;

  if(rndNumb == exclude) {
    return generateRandomBetween(min, max, exclude);
  }else{
    return rndNumb;
  }
}

let minBoundary=1;
let maxBoundary=100;

const GameScreen = ({ userNumber, onGameOver }) => {

    const initialGuess = generateRandomBetween(
        1,
        100, 
        userNumber
    );

    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
      if(currentGuess == userNumber){
        onGameOver();
      }
    },[currentGuess, userNumber, onGameOver])


    /* -- GuessHandler - geater or lower -- */
    const nextGuessHandler = (direction) => {
        /* -- if user lies about greater or higher -- */
        if(
            (direction === "lower" && currentGuess < userNumber) || 
            (direction === "greater" && currentGuess > userNumber)
        ){
            Alert.alert('Dont lie', 'This is wrong..', [
                {text:'Sorry!', style:'Cancel'}
            ]);
            return;
        }

      if(direction === "lower"){
        maxBoundary = currentGuess;
      }else{
        minBoundary = currentGuess + 1;
      }
      const newRndNumb = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
      setCurrentGuess(newRndNumb);

    }


    return ( 
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <TextInstruction style={styles.instructionText}>Higher or Lower?</TextInstruction>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                          <Ionicons name='md-remove' size={24} color='white'/>
                        </PrimaryButton>  
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={24} color='white' />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                {/* <View>LOG ROUNDS</View> */}
            </View>
        </View>
     );
}
 
export default GameScreen;

/* -- STYLES -- */
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:12
    },
    instructionText:{
      marginBottom:12
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    buttonContainer: {
      flex: 1,
    },
})