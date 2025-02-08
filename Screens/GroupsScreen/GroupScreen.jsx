import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import COLORS from "../../Constants/Colors";
import Chatthumbnail from '../../components/Chatthumbnail';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
export default function GroupScreen() {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.header}>
      <View style={styles.rightheader}>
      <MaterialIcons name='group' size={28} color={COLORS.MILDGREEN}/>
      <Text style={styles.headertext}>Groups</Text>
      </View>
      <View style={styles.headerSide}> 
      <AntDesign name='adduser' size={24} color={COLORS.WHITE}/>
      </View>
    </View>
    {/* <View style={{borderBottomWidth:1,borderBottomColor:COLORS.WHITE}}></View> */}
     {/* ChatThumbs */}
     <View>
      <Chatthumbnail/>
      <Chatthumbnail/>
      <Chatthumbnail/>
      <Chatthumbnail/>
      <Chatthumbnail/>
      <Chatthumbnail/>
      <Chatthumbnail/>
      <Chatthumbnail/>
      <Chatthumbnail/>
      <Chatthumbnail/>
      <Chatthumbnail/>
     </View>
   </ScrollView>
  )
};


const styles=StyleSheet.create(
  {rightheader:{
    display:"flex",
    justifyContent:"center",
    flexDirection:"row-reverse",
    alignItems:"center",
    margin:2,
  },
   container:{
     backgroundColor:COLORS.PRIMARYBG,
     color:COLORS.WHITE,
     marginTop:60,
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
   },
   headertext:{
     color:COLORS.WHITE,
     textAlign:"center",
     fontSize:20,
     margin:10,
   }
  }
)