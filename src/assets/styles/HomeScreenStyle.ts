import {Dimensions, StyleSheet} from 'react-native'

export const Style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#171717'
    },
    subContainer: {
      width:Dimensions.get('window').width/3,
      marginBottom:30
    },
    posterImage:{
      color:'white',
      fontSize:14,
      marginTop:10,
      marginLeft:5
    },
    

    
  });