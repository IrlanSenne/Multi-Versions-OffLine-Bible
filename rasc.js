import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import Biblia from './biblia-acf.json'
import Header from './header'

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity  onPress={onPress} style={[styles.item, style]}>  
  <Text>{String(item.estado)}</Text>
    <Text><Text style={styles.num}>{Number(item.id) + 1}</Text><Text style={styles.title}>{item.title}</Text></Text>
  </TouchableOpacity>
);

export default function App (props){

    const DATA = [];
    const cap = Number(props.cap)
    const livro = props.liv   
    const numeroVers = Biblia[livro][cap].v.length

    for(let i = 0; i< numeroVers;i++){
        let titulo=Biblia[livro][cap].v[i].t
        DATA.push({id:String(i),title:titulo, estado:false})
    }
   
    const [selectedId, setSelectedId] = useState(1);
    const [virgem,setVirgem] = useState(false);

  const renderItem = ({ item }) => {
      
    const backgroundColor = item.id == selectedId &&  virgem ? "rgba(146,135,135,0.5)"  :  "#eee";
    return (
      <Item
        item={item}
        onPress={() => {
         
          setSelectedId(item.id)
          setSelectedST(item.estado)
        
       
          //make a memory for IDs with array and boolean useState trhough  IFs
        }}
        style={{ backgroundColor }}
      />
    );
   
  };

  return (
    <SafeAreaView style={styles.container}>
     <Header nomeLivro={livro} cap={cap + 1}/>
     <Text style={{fontSize:30}}>selecionado : {selectedId} - </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

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

