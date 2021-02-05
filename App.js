import React from 'react';

import {  Text,View,TextInput,StyleSheet,Image } from 'react-native';
export default function App() {
return (
  <View style={styles.container}>
    <Text style={styles.content}> Hello World</Text>
    <View>
          <Image style={styles.image}   source= {require('./images/images.png')}>
            </Image>
  </View>
</View>

)}
const styles=StyleSheet.create({
            image:{
                              width:300,
                              height:260,
                              marginBottom:122,
                              
                              justifyContent:'center',
                              backgroundColor:'#FCC',
                              borderRadius:10,
                         },
            container:{ flex:1,
                               backgroundColor:'#FCC',
                               marginTop:100,
                               width:300,
                               marginBottom:30,
                              marginLeft:30,
                               justifyContent:'center',
                              
                             
                            },
             content:{ 
                             color:'#59FF',
                              marginTop:60,
                              
                              height:90,
                            
                              justifyContent:'center',
                             
                             fontSize:25,
                             textAlign:'center'
                           }               
})
