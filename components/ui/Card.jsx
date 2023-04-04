import { View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const Card = ({ children }) => {
    return ( 
        <View style={styles.card}>
            {children}
        </View>
     );
}
 
export default Card;

const styles = StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:36,
        marginHorizontal:30,
        paddingHorizontal:15,
        paddingVertical:20,
        backgroundColor:Colors.primary700,
        borderRadius:10
      },
}
)