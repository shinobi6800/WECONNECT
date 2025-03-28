import { View, Text ,StyleSheet,ScrollView,TextInput,SafeAreaView} from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from "../../Constants/Colors";
import Chatthumbnail from '../../components/Chatthumbnail';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
export default function GroupScreen() {


  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
   <View style={styles.header}>
     <View style={styles.rightheader}>
     <MaterialIcons name='groups-3' size={24} color={COLORS.MILDGREEN}/>
     <Text style={styles.headertext}>Groups</Text>
     </View>
     <View style={styles.headerSide}> 
     <AntDesign name='camera'  size={24} color={COLORS.MILDGREEN}/>
     <AntDesign name='github'  size={24} color="yellow"/>
     <AntDesign name='adduser' size={24} color={COLORS.WHITE}/>
     <MaterialIcons name='explore' size={24} color={COLORS.SEA}/>
     </View>
   </View>
   <View style={styles.searchchats}>
     <TextInput placeholder='Search for groups' style={styles.searchinput} />
   </View>
   {/* filtertabs */}

   {/* <View style={{borderBottomWidth:1,borderBottomColor:COLORS.WHITE}}></View> */}
    {/* ChatThumbs */}
    <View>
     <Chatthumbnail/>
    </View>
    <View style={{color:"#fff"}}>
     <Text style={{color:"grey",fontSize:12,padding:10,margin:10,textAlign:"center",}}>All Conversations are end to end encrypted</Text>
    </View>
  </ScrollView>
 </SafeAreaView>
  )
};

const styles=StyleSheet.create(
  {
    
   searchchats:{
     width:"100%",
     margin:10,
     padding:20,
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     flexDirection:"row",
     height:20,
     // backgroundColor:"red"
   },
   searchinput:{
     backgroundColor:COLORS.WHITE,
     padding:20,
     marginTop:10,
     width:"95%",
     marginBottom:10,
     marginRight:10,
     borderRadius:12,
     color:COLORS.COOL,
   }
   ,
   rightheader:{
      display:"flex",
      justifyContent:"center",
      flexDirection:"row-reverse",
      alignItems:"center",
      margin:2,
    },
    assure:{
      fontSize:50,
      color:COLORS.WHITE,
    },
     container:{
       backgroundColor:COLORS.PRIMARYBG,
       // color:COLORS.WHITE,
       marginTop:0,
       height:"100%",
     },
      header:{
       padding:5,
       display:"flex",
       justifyContent:"space-between",
       alignItems:"center",
       flexDirection:"row"
     },
     headerSide:{
       padding:10,
       display:"flex",
       justifyContent:"space-between",
       flexDirection:"row",
       gap:10,

     },
     headertext:{
       color:COLORS.WHITE,
       textAlign:"center",
       fontSize:20,
       margin:10,
     }
    }
)