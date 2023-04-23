import { View, Text } from 'react-native'
import React, {useState} from 'react'
import AuthDetails from '../../components/auth/details'
import AuthMenu from '../../components/auth/menu'
import style from './styles'

export default function AuthScreen() {
  const [authPage, setAuthPage] = useState(0)
  const [detailsPage, setDetailsPage] = useState(false)
  return (
    <View style={style.container}>
      {detailsPage ? 
        <AuthDetails  setDetailsPage={setDetailsPage}/>
        :
        <AuthMenu authPage={authPage} setAuthPage={setAuthPage} detailsPage={detailsPage} setDetailsPage={setDetailsPage}/>
      }
     
    </View>
  )
}