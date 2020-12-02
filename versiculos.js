import React from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView, View } from "react-native";
import Biblia from './biblia-acf.json'
import Header from './header'
import Modal from 'react-native-modal'

export default class Versiculos extends React.Component{

  constructor(props){
    super(props)
    const DATA = [];
    const cap = Number(props.cap)
    const livro = props.liv
    const numeroVers = Biblia[livro][cap].v.length
    for(let i = 0; i< numeroVers ;i++){
      let titulo=Biblia[livro][cap].v[i].t
      DATA.push({id:String(i),title:titulo})
  }
    this.state = {   
      livro:props.liv,
      cap:Number(props.cap),
      data:DATA,
      visible:false
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
      <TouchableOpacity onPress={()=>{
        this.setState({visible:true})
      }}>
        <Text>POPUP gfg</Text>
      </TouchableOpacity>
     <ScrollView>
     {         
         this.state.data.map((item, index)=>{
           return(
            <TouchableOpacity onPress={()=>this.selectionHandler(index)} style={item.isSelected ? styles.selected : styles.notSelected} key={item.id}>
             <Text><Text style={styles.num}>{Number(item.id) + 1} </Text><Text style={styles.title}> {item.title}</Text></Text>
           </TouchableOpacity>
           )
         })
       }
     </ScrollView>
     <Modal 
        onBackdropPress={()=>this.setState({visible:false})}
        isVisible={this.state.visible}>
       <View style={{backgroundColor:'#fff',height:100}}>
         <Text>M o d a l</Text>
         <TouchableOpacity onPress={()=>{
        this.setState({visible:false})
      }}>
        <Text>POPUP gfg</Text>
      </TouchableOpacity>
       </View>
     </Modal>
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
    color:"#000"
  },
  num:{
    fontSize:15,
    fontWeight:'bold',
    color:'#806CA5',
  },
  selected:{
   paddingHorizontal:6,
    backgroundColor:"#c9c9ca",
  },
  notSelected:{
    paddingHorizontal:6,
    backgroundColor:'#eee'
  }
});