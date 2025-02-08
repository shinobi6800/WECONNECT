import { View, Text, SafeAreaView, TextInput ,StyleSheet, KeyboardAvoidingView} from 'react-native'
import React from 'react'

export default function SignUpScreen() {
  return (
     <SafeAreaView >
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.form}>
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
        </View>
      </KeyboardAvoidingView>
  
     </SafeAreaView>
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
    height:"100%"
   },
   form:{
     backgroundColor:COLORS.MILDGREEN ,
     padding:24,
     margin:55,
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