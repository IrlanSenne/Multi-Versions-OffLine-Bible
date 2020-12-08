import React from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView, View,Modal,Dimensions,Alert,AsyncStorage } from "react-native";
import Biblia from './biblia-acf.json'
import Header from './header'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const height = Dimensions.get('window').height
export default class Versiculos extends React.Component{
 loadData = async () => {
  try {
    const tam = await AsyncStorage.getItem('Tamanho');
    const est = await AsyncStorage.getItem('Estilo');
    if (tam === null ){
      this.setState({fontTam:20})
    }
    if (est === null ){
      this.setState({pos:0})
    }
    if (tam !== null && est !== null) {
      // We have data!!
     this.setState({fontTam:Number(tam)})
     this.setState({pos:Number(est)})
    }
  } catch (error) {
   alert(error)
  }
 }

  constructor(props){
    super(props)
    this.state = {   
      livro:props.liv,
      cap:Number(props.cap),
      totalCaps:0,
      data:[],
      fontTam:20,
      visible:false,
      fontEstilo:['','BarlowCondensed-Regular','DancingScript-Regular','Dosis-Regular','InconsolataCondensed-Regular'],
      pos:0
    }
    this.requestLocal = this.requestLocal.bind(this)
  
  }

componentDidMount = async() =>{
  this.loadData()
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
      totalCaps:Biblia[livro].length
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
    if(this.state.totalCaps == 1){
      Alert.alert('Só há um capítulo nesse livro')
    }else if((this.state.cap + 1) > 1){
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
    }else if((this.state.cap + 1) <= 1){
      Alert.alert('Esse é o primeiro capítulo')
    }
   
  }

  next = ()=>{
    if(this.state.totalCaps == 1){
      Alert.alert('Só há um capítulo nesse livro')
    }else if((this.state.cap + 1) < this.state.totalCaps){ 
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
    }else if((this.state.cap + 1) >= this.state.totalCaps){
      Alert.alert('Esse é o último capítulo')
    }    
  }
  save = async () => {
    try { 
       await AsyncStorage.setItem("Tamanho", JSON.stringify(this.state.fontTam))
       
       await AsyncStorage.setItem("Estilo", JSON.stringify(this.state.pos))
      
    }catch(error) {
        Alert.alert('Não foi possível gravar as alterações')
    }

    this.setState({
      visible:false
    })
  }

  leftFont(){
    if(this.state.pos == 0){
      this.setState({pos:4})
    }else{
      this.setState({
        pos:this.state.pos -1
      })
    }
  }

  rightFont(){
  if(this.state.pos == 4){
    this.setState({pos:0})
  }else{
    this.setState({
      pos:this.state.pos +1
    })
  }
    
  }
   aumentar = () => {   
   this.setState({fontTam:this.state.fontTam + 1})
  }

  reset = async () => {
    try { 
      await AsyncStorage.removeItem("Tamanho")
      await AsyncStorage.removeItem("Estilo ")     
   }catch(error) {
       Alert.alert('Não foi possível gravar as alterações')
   }
   this.setState({visible:false,fontTam:20,pos:0})
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
                    <Text><Text style={styles.num}>{Number(item.id) + 1} </Text><Text style={{ fontSize: this.state.fontTam, color:"#000",fontFamily:this.state.fontEstilo[this.state.pos]}}> {item.versiculo}</Text></Text>
                  </TouchableOpacity>
                  )
                })
              }   
              <View style={{flex:1,alignItems:'center',marginTop:40,marginBottom:10}}>
                  <FontAwesome5  onPress={()=> this.setState({visible:true})} style={{color:'rgba(123,0,0,0.6)'}} name={'cog'} size={20} />
              </View>          
            </ScrollView>
            <TouchableOpacity onPress={()=>this.before()} style={[styles.sets,{left:'0.8%'}]}>
              <FontAwesome5 style={{color:'rgba(123,0,0,0.6)',fontWeight:'bold'}} name={'angle-left'} size={30} />
          </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.next()} style={[styles.sets,{left:'93%'}]}>
              <FontAwesome5 style={{color:'rgba(123,0,0,0.6)',fontWeight:'bold'}} name={'angle-right'} size={30} />
          </TouchableOpacity>
             
            <Modal
              visible={this.state.visible}
              animationType={'slide'}
              transparent={true}
            >             
              <View style={{flex:1,backgroundColor:'#000000AA',justifyContent:'flex-end'}}>   
                <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderTopRightRadius:10,borderTopLeftRadius:10,width:'100%',maxHeight:height * 0.4,paddingHorizontal:10}}>   
                 <Text style={{color:'#422F6C',fontSize:20}}>Fonte</Text>
                  <View style={styles.modal}>    
                      <TouchableOpacity style={{marginRight:20}} onPress={()=> this.setState({fontTam:this.state.fontTam - 1})}><FontAwesome5 style={{color:'#fff'}} name={'minus-square'} size={22} /></TouchableOpacity>             
                      <TouchableOpacity style={{marginLeft:20}} onPress={()=> this.aumentar()}><FontAwesome5 style={{color:'#fff'}} name={'plus-square'} size={22} /></TouchableOpacity>       
                  </View>
                  <Text style={{color:'#422F6C',fontSize:20}}>Estilo</Text>
                  <View style={styles.modal}>    
                      <TouchableOpacity style={{marginRight:20}} onPress={()=> this.leftFont()}><FontAwesome5 style={{color:'#fff'}} name={'angle-left'} size={22} /></TouchableOpacity>             
                      <Text style={{fontFamily:this.state.fontEstilo[this.state.pos],color:'rgba(178,151,224,0.8)',fontSize:20}}>Example</Text>
                      <TouchableOpacity style={{marginLeft:20}} onPress={()=> this.rightFont()}><FontAwesome5 style={{color:'#fff'}} name={'angle-right'} size={22} /></TouchableOpacity>       
                  </View>
                  <TouchableOpacity onPress={()=> this.save()} style={{marginVertical:10,width:60,height:20,backgroundColor:'#426712',justifyContent:'center',alignItems:'center',borderRadius:12}}><FontAwesome5 style={{color:'#fff',fontWeight:'bold'}} name={'check'} size={15} /></TouchableOpacity>
                  <TouchableOpacity onPress={()=> this.reset()} style={{marginVertical:10,width:80,height:25,backgroundColor:'rgba(190,0,0,0.8)',justifyContent:'center',alignItems:'center',borderRadius:12}}><Text style={{color:'#fff'}}>reset</Text></TouchableOpacity>

                </View>
              </View>

            </Modal>
            
        </View>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  modal:{
    width:'99.5%',
    backgroundColor:'rgba(0,0,0,0.8)',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    borderRadius:10,
    marginVertical:5
  },
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