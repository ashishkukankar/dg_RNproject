import {StyleSheet} from 'react-native'

export const Style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        marginTop:10,
        marginBottom:40,
        justifyContent:'center'
    },

    subContainer:{
        width:'95%',
        borderWidth:1,
        borderRadius:20,
        borderColor:'white',
        height:40,
        alignSelf:'center',
        flexDirection:'row'
    },
    image:{
        width:15,
        height:15,
        marginLeft:10,
    },
    imageContainer:{
        justifyContent:'center',
    },
    input:{
        width:'90%'
    }

})