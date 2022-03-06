import {StyleSheet} from 'react-native'

export  const  Style = StyleSheet.create({
    contain:{
        width:'100%',
        height: 65,
        backgroundColor:'#000000',
        flexDirection: 'row',
        marginBottom:10
    },
    imageContainer:{
        width:20,
        height:20,
        alignSelf:'center',
        marginLeft:10
    },
    headerText:{
      fontSize:18,
      color:'white',
      alignSelf:'center',
      fontWeight:'bold'  
    },
    headerTextContainer:{
        flex:1,
        alignSelf:'center'
    },
    searchContainer:{
        width:20,
        height:20,
        alignSelf:'center',
        marginRight:10,
    },

    searchbtn:{alignSelf:'center'}
})