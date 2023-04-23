
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container :{
        flex:1,
        paddingHorizontal:30,
        paddingTop:20
        
    },
    textInput:{
        borderColor:'lightgray',
        borderBottomWidth:1,
        borderStyle: 'solid',
        paddingHorizontal: 20,
        paddingVertical:10,
        marginTop:30
    },
    button: {
        marginTop:80,
        borderColor:'lightgray',
        borderWidth:1,
        borderStyle: 'solid',
        paddingVertical:10,
        paddingHorizontal:20,
        alignItems:'center',
        backgroundColor:'red'
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    }
})

export default styles