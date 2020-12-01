import React, { Component } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity,View, ScrollView } from "react-native";
import Biblia from './biblia-acf.json'
import Header from './header'


export default class Versiculos extends React.Component{

  constructor(props){
    super(props)
    const DATA = [];
    const cap = Number(props.cap)
    const livro = props.liv
    const biblia = require('./biblia-acf.json')
    const numeroVers = Biblia[livro][cap].v.length
    for(let i = 0; i< numeroVers ;i++){
      let titulo=Biblia[livro][cap].v[i].t
      DATA.push({id:String(i),title:titulo})
  }
    this.state = {   
      livro:props.liv,
      cap:Number(props.cap),
      data:DATA
    }
  }

  componentDidMount(){
    let arr = this.state.data.map((item, index)=>{
      item.isSelected = false
      return {...item}
    })
    this.setState({data : arr})
  }

  selectionHandler =(ind)=>{
    const {data} = this.state
    let arr = data.map((item,index)=>{
      if(ind == index){
         item.isSelected = !item.isSelected
      }
      return {...item}
    })
    this.setState({data : arr})
  }

  render(){
    const {data} = this.state
    return (
      <SafeAreaView style={styles.container}>
      <Header nomeLivro={this.state.livro} cap={this.state.cap +1 }/>
     <ScrollView>
       {
         
         this.state.data.map((item, index)=>{
           return(
            <TouchableOpacity onPress={()=>this.selectionHandler(index)} style={item.isSelected ? {backgroundColor:"rgba(146,135,135,0.5)"} : {backgroundColor:'#eee'}} key={item.id}>
        <Text><Text style={styles.num}>{Number(item.id) + 1}</Text><Text style={styles.title}>{item.title}</Text></Text>
      </TouchableOpacity>
           )
         })
       }
     </ScrollView>      
     </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  item: {
    padding: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
  },
  num:{
    fontWeight:'bold',
    color:'#806CA5',
  }
});