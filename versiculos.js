import React from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView, View,Modal,Dimensions } from "react-native";
import Biblia from './biblia-acf.json'
import Header from './header'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const height = Dimensions.get('window').height
export default class Versiculos extends React.Component{

  constructor(props){
    super(props)
    this.state = {   
      livro:props.liv,
      cap:Number(props.cap),
      data:[],
      fontTam:20,
      visible:false,
    }
    this.requestLocal = this.requestLocal.bind(this)   
  }

componentDidMount(){
  this.requestLocal()
  }

  requestLocal(){
    const DATA = [];
    const cap = this.state.cap
    const livro = this.state.livro
    const numeroVers = Biblia[livro][cap].v.length
 
      for(let v = 0; v< numeroVers ;v++){
        let versiculo=Biblia[livro][cap].v[v].t
        DATA.push({id:String(v),versiculo:versiculo,isSelected:false})
      }
    this.setState({
      data:DATA,
    })
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

  before = ()=>{
    const DATA2 = [];
    const cap = this.state.cap - 1
    const livro = this.state.livro
    const numeroVers = Biblia[livro][cap].v.length
 
      for(let v = 0; v< numeroVers ;v++){
        let versiculo=Biblia[livro][cap].v[v].t
        DATA2.push({id:String(v),versiculo:versiculo,isSelected:false})
      }
    this.setState({
      data:DATA2,
      cap:this.state.cap -1
    })   
  }

  next = ()=>{
    const DATA2 = [];
    const cap = this.state.cap + 1
    const livro = this.state.livro
    const numeroVers = Biblia[livro][cap].v.length
 
      for(let v = 0; v< numeroVers ;v++){
        let versiculo=Biblia[livro][cap].v[v].t
        DATA2.push({id:String(v),versiculo:versiculo,isSelected:false})
      }
    this.setState({
      data:DATA2,
      cap:this.state.cap +1
    })   
  }

  render(){
    const {data} = this.state

    return (
      <SafeAreaView style={styles.container}>       
      <Header nomeLivro={this.state.livro} cap={this.state.cap + 1}/>  
      <View style={{flex:1, padding:7}}>
        <ScrollView>
        {         
            this.state.data.map((item, index)=>{
              return(
                <TouchableOpacity onPress={()=>this.selectionHandler(index)} style={item.isSelected ? styles.selected : styles.notSelected} key={item.id+index}>
                <Text><Text style={styles.num}>{Number(item.id) + 1} </Text><Text style={{ fontSize: this.state.fontTam, color:"#000"}}> {item.versiculo}</Text></Text>
              </TouchableOpacity>
              )
            })
          }   
          <FontAwesome5  onPress={()=> this.setState({visible:true})} style={{position:'relative',marginTop:20,marginBottom:10,left:'50%',color:'rgba(123,0,0,0.6)'}} name={'cog'} size={20} />
        </ScrollView>
       <TouchableOpacity onPress={()=>this.before()} style={[styles.sets,{left:'0.8%'}]}>
        <FontAwesome5 style={{color:'rgba(123,0,0,0.6)',fontWeight:'bold'}} name={'angle-left'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.next()} style={[styles.sets,{left:'93%'}]}>
        <FontAwesome5 style={{color:'rgba(123,0,0,0.6)',fontWeight:'bold'}} name={'angle-right'} size={30} />
      </TouchableOpacity>
     </View>
     <Modal 
        visible={this.state.visible}
        animationType={'slide'} 
        transparent={true}

    >
    <View style={{flex:1,backgroundColor:'#000000AA',justifyContent:'flex-end'}}>   
    <TouchableOpacity style={{ width:'100%',height:'100%'}} onPress={()=>this.setState({visible:false})}><Text style={{opacity:1}}>-</Text></TouchableOpacity>
      <View style={{
          backgroundColor:"#ffffff",
          width:'100%',
          borderTopRightRadius:10,
          borderTopLeftRadius:10,
          paddingHorizontal:10,
          maxHeight:height,
          flexDirection:'row',
        
          }}>
          <View style={{flex:1,alignItems:'center'}}>
            <Text> 
              <TouchableOpacity onPress={()=> this.setState({fontTam:this.state.fontTam - 1})}><FontAwesome5   name={'minus-square'} size={22} /></TouchableOpacity>
              <Text style={styles.popTxt}> Tamanho da fonte </Text>
              <TouchableOpacity onPress={()=> this.setState({fontTam:this.state.fontTam + 1})}><FontAwesome5   name={'plus-square'} size={22} /></TouchableOpacity>
            </Text>
          </View>
          <View style={styles.line}></View>         
      <View style={styles.line}></View>
    </View>    
    <View style={{
          backgroundColor:"#ffffff",
          width:'100%',
          borderTopRightRadius:10,
          borderTopLeftRadius:10,
          paddingHorizontal:10,
          height:height * 0.2,
          maxHeight:height,
          flexDirection:'row'
          }}>
         <View style={{flex:1,alignItems:'center'}}>
            <Text> 
              <TouchableOpacity onPress={()=> this.setState({fontTam:this.state.fontTam - 1})}><FontAwesome5   name={'angle-left'} size={22} /></TouchableOpacity>
              <Text style={styles.popTxt}> Estilo </Text>
              <TouchableOpacity onPress={()=> this.setState({fontTam:this.state.fontTam + 1})}><FontAwesome5   name={'angle-right'} size={22} /></TouchableOpacity>
            </Text>
          </View>
    </View> 
 
    </View>
</Modal>

     </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  sets:{
    position:'absolute',
    top:'60%',
    backgroundColor:'rgba(250,250,250,1)',
    width:40,
    height:40,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    padding:5
  },
  container: {
    flex: 1,
  },
  item: {
    padding: 5,
    marginHorizontal: 5,
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
  },
  popTxt:{
    color:'#182E44',
    fontSize:20,
    fontWeight:'500',
    margin:15,
    marginLeft:15,
  },
  line:{
    opacity:0.1,
    backgroundColor:'#182E44',
    height:1.5
  },
  container2:{
    opacity:1,
    height:40,    
    flexDirection: "row",   
    backgroundColor:'rgba(0,0,0,0)',
    paddingLeft:'70%',  
    justifyContent:'center',
    borderBottomWidth:2,
    borderBottomColor:'#fff'

}
});