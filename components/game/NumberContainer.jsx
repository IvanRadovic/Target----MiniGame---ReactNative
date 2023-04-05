import { View, Text, StyleSheet, Dimensions } from "react-native";

/* -- COMPONENTS -- */
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
     );
}
 
export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

/* -- STYLES -- */
const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor: Colors.accentColor,
        padding: deviceWidth < 380 ? 12 : 23 ,
        margin:deviceWidth < 380 ? 12 : 15,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        color:Colors.accentColor,
        fontSize:deviceWidth < 380 ? 28 : 36,
        fontFamily:'open-sans-bold'
    },
})