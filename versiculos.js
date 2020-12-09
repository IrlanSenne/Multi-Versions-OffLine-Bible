import React, {PureComponent} from  "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView, View,Dimensions,Alert,AsyncStorage } from "react-native";
import Biblia from './biblia-acf.json'
import Header from './header'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Setas from './setas'
import Setas2 from './setas2'
import Modal from './modal'

const height = Dimensions.get('window').height
export default class Versiculos extends PureComponent{
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
      contador:0,
      cores:['#EB7F8B','#DAE17A','#AB8FAC','#78C0C9','#7FB9AD'],
      painted:null,
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
        DATA.push({id:String(v),versiculo:versiculo,isSelected:false,painted:false})
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
        if(item.isSelected == false){
          this.setState({contador:this.state.contador + 1})
          item.isSelected = true
        }else if(item.isSelected == true){
          this.setState({contador:this.state.contador - 1})
          item.isSelected = false
        }
             
      }     
     
      return {...item}
    })
    
    this.setState({data : arr})
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

  diminuir = () => {   
    this.setState({fontTam:this.state.fontTam - 1})
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
          DATA2.push({id:String(v),versiculo:versiculo,isSelected:false,modal:false})
        }
      this.setState({
        data:DATA2,
        cap:this.state.cap +1
      })   
    }else if((this.state.cap + 1) >= this.state.totalCaps){
      Alert.alert('Esse é o último capítulo')
    }    
  }
  setColor(color){
    this.setState({painted:color})
  }

  render(){
    const {data} = this.state
    return (
      <SafeAreaView style={styles.container}>       
      <Header nomeLivro={this.state.livro} cap={this.state.cap + 1}/>
      <Text>{this.state.painted}</Text>
        <View style={{flex:1, padding:7}}>
            <ScrollView>
            {         
                this.state.data.map((item, index)=>{
                  return(
                    <TouchableOpacity onPress={()=>this.selectionHandler(index)} style={item.isSelected == true ? styles.selected :  styles.notSelected} key={item.id+index}>
                    <Text><Text style={styles.num}>{Number(item.id) + 1} </Text><Text style={{ fontSize: this.state.fontTam, color:"#000",fontFamily:this.state.fontEstilo[this.state.pos]}}> {item.versiculo}</Text></Text>
                  </TouchableOpacity>
                  )
                })
              }   
              <View style={{flex:1,alignItems:'center',marginTop:40,marginBottom:10}}>
                  <FontAwesome5  onPress={()=> this.setState({visible:true})} style={{color:'rgba(123,0,0,0.6)'}} name={'cog'} size={20} />
              </View>  
             
            </ScrollView>           
            
            <Setas anterior={()=>this.before()}/>
            <Setas2 proximo={()=>this.next()}/>
           
           
                 
            <Modal 
              visible={this.state.visible} 
              diminuir={()=>this.diminuir()} 
              aumentar={()=>this.aumentar()} 
              leftFont={()=>this.leftFont()} 
              rightFont={()=>this.rightFont()}
              save={()=>this.save()}
              reset={()=>this.reset()}
              fontEstilo={this.state.fontEstilo}
              pos={this.state.pos}
            />
        </View>
        {   
            this.state.contador > 0 ?
             
                        <View style={styles.container3}> 
                        {
                      this.state.cores.map((cor)=>{
                        return(
                            <TouchableOpacity onPress={()=> this.setColor(cor)} style={[styles.squareColor,{backgroundColor:cor}]} key={cor}>
                                <Text style={{opacity:1}}>.</Text>
                            </TouchableOpacity>
                        )
                      })
                        }
                      </View>  
              : null 
            }   
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  squareColor:{
    width:27,
    height:27,
    margin:5
},
container3:{
    position:'absolute',
    top:'90%',
    left:0 ,
    flex:1,
    flexDirection:'row',
    backgroundColor:'rgba(0,0,0,0.6)',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    width:'100%',
    maxHeight:40,
   
},
modal:{
    marginVertical:10,
    width:45,
    height:25,
    backgroundColor:'rgba(190,0,0,0.8)',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12
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