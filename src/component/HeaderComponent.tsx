import React from 'react'
import { View ,Image, Text, TouchableOpacity} from 'react-native';
import {Style} from '../assets/styles/HeaderStyles'

interface headerProp{
    clickSearch:()=>void
}

/**
 * This is header component which allow to click search btn
 * @param props  header props
 * @returns component
 */
const HeaderComponent = (props:headerProp)=>{

    return(
        <View style={Style.contain}>
            <Image
              style={Style.imageContainer}
              source ={require('../assets/images/back_btn.png')}
            />
            <View style={Style.headerTextContainer}>
                <Text
            style={Style.headerText}>Romatic Comedy</Text>
            </View>
            <TouchableOpacity
            style={Style.searchbtn}
            onPress={()=>props.clickSearch()}>
            <Image
              style={Style.searchContainer}
              source ={require('../assets/images/search.png')}
            />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderComponent