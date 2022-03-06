import React from 'react'
import {View,Image, TextInput} from 'react-native'
import { Style } from '../assets/styles/SearchStyles'

interface SearchProps{
    textValue: string,
    changeText: (text:string)=>void, 
}

const SearchComponent = (props:SearchProps) =>{
    return(
           
        <View style={Style.container}>        
            <View style={Style.subContainer}>
            <View 
            style={Style.imageContainer}>          
            <Image
             style={Style.image}
             source={require('../assets/images/search.png')}/>
             </View>
             <TextInput
               style={Style.input}
               placeholder={'Search'}
               value ={props.textValue}
               onChangeText={(text)=>props.changeText(text)}
               />
        </View>
        </View>


    )
}

export default SearchComponent