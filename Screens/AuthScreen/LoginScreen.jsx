import { View, Text , StyleSheet,TextInput,KeyboardAvoidingView,SafeAreaView} from 'react-native'
import React from 'react'
import { AntDesign ,MaterialIcons,FontAwesome} from '@expo/vector-icons'

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView>
    <SafeAreaView >
     <View style={styles.container}>
       <AntDesign name='aliwangwang-o1' size={56} color={COLORS.MILDGREEN} />
       <Text style={{fontSize:15,padding:5,margin:5}}>WECONNECT</Text>
       <View style={styles.form}>
         <Text style={{fontSize:30,color:COLORS.WHITE,fontWeight:900, textAlign:'center',padding:5,}}>Login</Text>
       <View>
       <Text style={styles.labels}>Email</Text>
       <TextInput placeholder='Type your email' style={styles.inputs}/>
     </View>
     <View>
       <Text style={styles.labels}>Password</Text>
       <TextInput placeholder='Enter your password' style={styles.inputs}/>
     </View> 
     <Text style={{fontSize:20,color:COLORS.WHITE,fontWeight:1000, textAlign:'center',padding:15,backgroundColor:"black",borderRadius:10}}>Login</Text>
       </View>
       </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles= StyleSheet.create({
  container:{
   display:"flex",
   flexDirection:"column",
   backgroundColor:COLORS.PRIMARY,
   justifyContent:"center",
   alignItems:"center",
   padding:10,
   width:"max",
   height:"100%",
  },
  form:{
    backgroundColor:COLORS.MILDGREEN ,
    padding:24,
    margin:10,
    borderRadius:12,
  },
  labels:{
   fontSize:18,
   color:COLORS.WHITE,
   padding:3,
   margin:5,
  },
  inputs:{
   backgroundColor:COLORS.WHITE,
   width:"340",
   padding:12,
   borderRadius:10,
   marginBottom:25,
  }
})