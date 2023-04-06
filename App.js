import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';


/* --- COMPONENTS --- */
import StartGameScreeen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const[userNumber, setUserNumber] = useState();
  const[gameIsOver, setGameIsOver] = useState(true);
  const[guessRounds, setGuessRounds] = useState(0);


  /* -- Font Family -- */
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }


  /* -- PICKED NEW NUBMER -- */
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }


  /* -- GAME OVER HANLDER -- */
  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }

  const startNewGameHandler = () => {
      setUserNumber(0);
      setGuessRounds(0);
  }

  let screen = <StartGameScreeen onPickNumber={pickedNumberHandler} />;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} /> ;
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen 
                userNumber={userNumber} 
                roundsNumber={guessRounds} 
                onStartNewGame={startNewGameHandler} 
              />
  }


  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={[Colors.primary700,Colors.accentColor]} style={styles.rootScreen}>
        <ImageBackground 
          source={require('./assets/images/background.png')} 
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
          
        </ImageBackground>
      </LinearGradient>
    </>
  );
}


/* -- STYLES -- */
const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
