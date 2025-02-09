import { View, Text, SafeAreaView, TextInput ,StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function SignUpScreen() {
  return (
    <KeyboardAvoidingView>
     <SafeAreaView >
      <View style={styles.container}>
        <AntDesign name='aliwangwang-o1' size={56} color={COLORS.MILDGREEN} />
        <Text style={{fontSize:15,padding:5,margin:5}}>WECONNECT</Text>
        <View style={styles.form}>
          <Text style={{fontSize:30,color:COLORS.WHITE,fontWeight:900, textAlign:'center',padding:5,}}>Welcome, Sign Up</Text>
        <View>
        <Text style={styles.labels}>Email</Text>
        <TextInput placeholder='Type your email' style={styles.inputs}/>
      </View>
      <View>
        <Text style={styles.labels}>Password</Text>
        <TextInput placeholder='Enter your password' style={styles.inputs}/>
      </View>  <View>
        <Text style={styles.labels}>Fullname</Text>
        <TextInput placeholder='Enter your FullName' style={styles.inputs}/>
      </View>
      <TouchableOpacity>
      <Text style={{fontSize:20,color:"grey",fontWeight:200, textAlign:'center',padding:15,}}>Already Have an Account ?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{fontSize:20,color:COLORS.WHITE,fontWeight:1000, textAlign:'center',padding:15,backgroundColor:"#262626",borderRadius:10}}>Sign up</Text>
      </TouchableOpacity>
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
   }
})