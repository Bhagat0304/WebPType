import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './src/redux/reducers'
import Constants from 'expo-constants'
import {initializeApp, getApps} from 'firebase/app';
import AuthScreen from './src/screens/auth';

const store = createStore(rootReducer,applyMiddleware(thunk))
if(getApps().length == 0){
  initializeApp(Constants.manifest.web.config.firebase)

}

export default function App() {
  return (
    <Provider store = {store}>
      <AuthScreen/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
