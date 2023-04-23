import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import styles from './style';
import { TextInput } from 'react-native';


export default function AuthDetails({authPage,setDetailsPage}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> setDetailsPage(false)}>
            <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style = {styles.textInput}
        placeholder='Email'
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style = {styles.textInput}
        placeholder='Password'
      />
      <TouchableOpacity
      style={styles.button}>
        <Text style={styles.buttonText}>{authPage == 0 ? 'Sign In': 'Sign Up'}</Text>
      </TouchableOpacity>
    </View>
  )
}