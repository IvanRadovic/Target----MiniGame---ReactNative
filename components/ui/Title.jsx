import { Text, StyleSheet, Platform} from "react-native";


/* -- COMPONENTS --  */


const Title = ({ children}) => {
    return (  
        <>
            <Text style={styles.title}>{children}</Text> 
        </>

    );
}
 
export default Title;


/* -- STYLES --- */
const styles = StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize:24,
        color:'white',
        textAlign:'center',
        borderWidth:Platform.select({ ios:0, android:2}),
        borderColor:'white',
        padding:12,
        maxWidth:"80%"
    }
})