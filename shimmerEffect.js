import React, {useEffect} from 'react';
import { Dimensions, View, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const {width} = Dimensions.get('window')

export default function Shimmer({visible, children}){

    useEffect(()=>{
        animation()
        animation2()

        return ()=>{
            animation()
            animation2()
        }
    }, [])
    const animation2 = ()=>{
        AnimatedValue2.setValue(1)
        Animated.timing(
            AnimatedValue2,
            {
                toValue:1,
                duration:400,
                useNativeDriver:false,
    
            }
        ).start(()=>{
            setTimeout(()=>{
                animation()
            },1000);
        })
    }
const animation = ()=>{
    AnimatedValue.setValue(0)
    Animated.timing(
        AnimatedValue,
        {
            toValue:1,
            duration:400,
            useNativeDriver:false,

        }
    ).start(()=>{
        setTimeout(()=>{
            animation()
        },1000);
    })
}
const AnimatedValue2=new Animated.Value(1)
const AnimatedValue=new Animated.Value(0)
const translateX2 = AnimatedValue.interpolate({
    inputRange:[0,1],
    outputRange:[-10,300]
})
const translateX = AnimatedValue.interpolate({
    inputRange:[0,1],
    outputRange:[-20,120]
})
if(visible){
    return(
        <SafeAreaView>
           <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title2}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title3}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX2 } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title4}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX2 } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title2}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title3}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX2 } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title4}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX2 } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title2}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title3}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX2 } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              <View style={styles.container}>
               <View style={styles.item}>
               <View style={styles.title4}>
               <Animated.View
               style={{
                   width:'30%',
                   height:'100%',
                   opacity: 0.3,
                   backgroundColor:'#fff',
                   transform:[ { translateX: translateX2 } ]
               }}
               >    
                  
                  </Animated.View>
                  </View>
               </View>
             
              </View>
              </SafeAreaView>
              
          
           
       )
}
return(
    <>
        {children}
    </>
);
    
}

const styles = StyleSheet.create({
    container: {
      margin: 1,
      width:width - 10,
      height:45,
      borderRadius:10 

    },
    item: {
      backgroundColor: 'rgba(205,202,216,0.7)',
      padding: 10,
      marginVertical: 3,
      marginHorizontal: 5,
      height:45,
      
    },
    title: {
        width:width - 250,
        backgroundColor:'rgba(45,5,71,0.3)',
        height:15,
        borderRadius:10,
        overflow:'hidden'     
    },
    title2: {
        width:width - 260,
        backgroundColor:'rgba(45,5,71,0.4)',
        height:15,
        borderRadius:10,
        overflow:'hidden' 
    },
    title3: {
        width:width - 290,
        backgroundColor:'rgba(45,5,71,0.2)',
        height:15,
        borderRadius:10,
        overflow:'hidden'   
    },
    title4: {
        width:width - 220,
        backgroundColor:'rgba(45,5,71,0.1)',
        height:15,
        borderRadius:10,
        overflow:'hidden'     
    },
  });
  