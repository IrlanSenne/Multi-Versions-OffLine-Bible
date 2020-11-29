import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import Biblia from './biblia-acf.json'
import Header from './header'


const Item = ({ item, onPress, style }) => (
  <TouchableOpacity  onPress={onPress} style={[styles.item, style]}>
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
        DATA.push({id:String(i),title:titulo})
    }
   
    const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id == selectedId  ? "rgba(146,135,135,0.5)" : "#eee";
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id)

        }}
        style={{ backgroundColor }}
      />
    );
   
  };

  return (
    <SafeAreaView style={styles.container}>
     <Header nomeLivro={livro} cap={cap + 1}/>
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

