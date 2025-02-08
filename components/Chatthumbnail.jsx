import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import  {useNavigation} from '@react-navigation/native'
import { Image } from 'expo-image';
export default function Chatthumbnail() {
  const navigation =useNavigation();
  return (
    <TouchableOpacity  >
      <View style={styles.Container}>
      <View style={styles.ChatContainer}>
          <View style={styles.ChatThumb}>
          {/* <AntDesign name='smile-circle' size={48} color={"yellow"}/> */}
          <Image
           source="https://picsum.photos/seed/696/3000/2000"
           contentFit="cover"
           transition={1500}
           style={{width:"45",height:45,borderRadius:100}}
           />
           <View style={styles.thumbText}>
           <Text style={styles.username}>Ryan Williams</Text>
           <Text style={styles.descpText}>Where are you</Text>
           </View>
           <View>
            <Text style={{marginLeft:72,opacity:0.5,color:"#fff",fontSize:12}}>Yesterday/12:10am</Text>
           </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles=StyleSheet.create({
    Container:{
     display:"flex",
     justifyContent:"center",
     margin:5,

    },
    thumbText:{
     marginLeft:5,
     padding:3,
     display:"flex",
     alignItems:"center"
    },
    descpText:{
        fontSize:15, 
        color:"#fff",
        opacity:0.5,
        padding:2,
       },
    ChatContainer:{
     padding:10,
     marginTop:10,
     marginLeft:10,
     margin:3,
     backgroundColor:COLORS.SLEEK,
     borderRadius:20,
     borderColor:"grey",
     borderWidth:0.5,
    },
    username:{
        color:COLORS.WHITE,
        display:"flex",
        flexDirection:"row",
        marginLeft:2,
        fontSize:15,
    },
    ChatThumb:{
     display:"flex",
     flexDirection:"row",
     justifyContent:"start",
     alignItems:"center",
     padding:2,
     textAlign:"center"
    },
});