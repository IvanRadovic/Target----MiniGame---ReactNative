import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const TextInstruction = ({ children, style }) => {
    return ( 
        <>
           <Text style={[styles.instructionText, style]}>{children}</Text>
        </>
     );
}
 
export default TextInstruction;

/* -- STYLES --- */
const styles = StyleSheet.create({
    instructionText:{
        fontFamily:'open-sans',
        color:Colors.accentColor,
        fontSize:24
      },
})
