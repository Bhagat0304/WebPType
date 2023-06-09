import { View, Text ,TouchableOpacity} from 'react-native'
import styles from './style'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 


export default function AuthMenu({authPage,setAuthPage,detailsPage,setDetailsPage}) {
  return (
    <View style={styles.container}>
      <View style = {styles.containerMain}>
        <Text style  = {styles.headerText}> {authPage == 0 ? 'Sign In': 'Sign Up' } </Text>
        <TouchableOpacity style = {styles.providerButton}
        onPress={()=> setDetailsPage(true)}>
            <Feather name="user" size={24} color="black" />
            <Text style={styles.providerButtonText}>Use Email</Text>
            <View/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.containerBottomButton} 
        onPress={()=> authPage == 0? setAuthPage(1) : setAuthPage(0)}>
        {authPage == 0 ? 
           <Text>Don't have an account ? <Text style={styles.bottomButtonText}>Sign Up</Text>  </Text>:
           <Text>Already have an account ? <Text style={styles.bottomButtonText}>Sign In</Text>  </Text>
        }
       
      </TouchableOpacity>
    </View>
  )
}