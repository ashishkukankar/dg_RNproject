import { Text, StyleSheet, View ,FlatList, Image, Dimensions} from 'react-native'
import React, { Component } from 'react'
import {Style} from '../assets/styles/HomeScreenStyle'
import ImageConstant  from '../assets/ImageConstant';
import HeaderComponent from '../component/HeaderComponent';
import SearchComponent from '../component/SearchComponent';

interface iProp{

}

type content={
name:string,
poster_image:string,

}

interface iState{
pageCount: number,
contentArray: content[],
inputText:string,
isSearchEnable:boolean
}

/**
 * this is main class which display list of poster and their name
 * and allow to filter poster on basis of their name
 */
class HomeScreen extends Component<iProp,iState> {
    constructor(props:  iProp){
        super(props)
       this.state={
            pageCount:1,
            contentArray:[],
            inputText:'',
            isSearchEnable:false
        }
    }

    componentDidMount(){
       this.setState({contentArray:
        this.fetchJsonData(this.state.pageCount).
        page.
        content_items.
        content})
    }
    
    /**
     * this method fetch data from json
     * @param count : conditional parameter to get json data from different pages
     * @returns return json data
     */
    fetchJsonData(count:number){
      let jsonData
        switch (count) {
            case 1:
                jsonData = require('../mock/api/CONTENTLISTINGPAGE_PAGE1.json')
                break;
             case 2:
                jsonData = require('../mock/api/CONTENTLISTINGPAGE_PAGE2.json')
                break;
             case 3:
                jsonData = require('../mock/api/CONTENTLISTINGPAGE_PAGE3.json')
                break;
            default:
                break;
        }
        console.log(jsonData)
        return jsonData
    }

    /**
     * this method is used to filter poster list as per per new text.
     * if text is empty or filter list length is 0 then it will load 
     * page 1 data
     * @param text  new text
     */
    onChangeText(text:string){
      this.setState({inputText:text})
      var filterData = this.state.contentArray.filter((item)=>{
          return item.name.toLowerCase().match(text.toLowerCase())
      })
      console.log('search data '+filterData.length)
      if(filterData.length > 0 && text.length >0){
      this.setState({contentArray: filterData})
      }else{
        this.setState({contentArray:
          this.fetchJsonData(1).
          page.
          content_items.
          content,
        pageCount:1})

  
      }
    }

    /**
     * this method get call when flatlist reach at end of list item.
     * this method will update count value and append list data in earlier list
     * if pageCount < 3 and searchComponent is hidden.
     */
    getMoreData(){
      if(this.state.pageCount <3 && !this.state.isSearchEnable){
        let count = this.state.pageCount+1
        console.log('getMoreData '+ count)
        this.setState({contentArray:
          [...this.state.contentArray,...this.fetchJsonData(count).
          page.
          content_items.
          content]})
      this.setState({pageCount:count })
  
      }
    }

  render() {
    console.log(this.state.isSearchEnable)
    return (
      <View style={Style.container}>
        <HeaderComponent 
        clickSearch={()=>this.setState({isSearchEnable:!this.state.isSearchEnable})}
        />
        {this.state.isSearchEnable?
        <SearchComponent
        changeText={text=>this.onChangeText(text)}
        textValue={this.state.inputText} />:null}
        <FlatList
          horizontal={false}
          data={this.state.contentArray}
          extraData={this.state.contentArray}
          keyExtractor={(item,index)=>index.toString()}
          numColumns={3}
          onEndReached={()=>this.getMoreData()}
          onEndReachedThreshold={.5}
          renderItem={({item, index}) => {
            return (
              <View style={Style.subContainer}>
                <Image
                source={ImageConstant[item.poster_image] != undefined?
                  ImageConstant[item.poster_image]
                  :require('../assets/images/missing_posters.png')} 
                style={{height:250,width:'95%',paddingLeft:15}}/>
                <Text style={Style.posterImage}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    )
  }
  
}


export default HomeScreen


