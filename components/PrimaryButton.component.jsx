import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
    const pressHandler = () => {
      console.log("blblbl");
    }
  return (
       <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={ ({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
                onPress={pressHandler} 
                android_ripple={{color:"#72063c"}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
  )
}

export default PrimaryButton;

/* --- Styles ---  */
const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin:5,
        overflow:"hidden"
    },
    buttonInnerContainer:{
        backgroundColor:"#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color:"white",
        textAlign:"center",

    },
    pressed:{
        opacity:0.75,

    }
})