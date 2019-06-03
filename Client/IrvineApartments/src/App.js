import {Navigation} from 'react-native-navigation';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import startPrivateApartmentViewing from './Screens/StartPrivateApartmentsScreen';
import AuthScreen from './Screens/AuthScreen';
import CreateAnAccount from './Screens/CreateAnAccount';
import PrivateApartmentsScreen from './Screens/PrivateApartments';

Navigation.registerComponent('IrvineApartments.AuthScreen', ()=> AuthScreen);
Navigation.registerComponent('IrvineApartments.CreateAnAccount', ()=> CreateAnAccount);
Navigation.registerComponent('IrvineApartments.PrivateApartmentsScreen', ()=> PrivateApartmentsScreen);

AsyncStorage.getItem('x-auth').then((token)=>{
  axios.get('http://192.168.50.14:3000/private/private',{
    headers:{
      'x-auth': token
    }
  }).then((response)=>{
    if(response.status == 200) {
      return startPrivateApartmentViewing();
    }
    return Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          stack: {
            children: [{
              component: {
                name: "IrvineApartments.AuthScreen",
                options: {
                  topBar: {
                    visible: false
                  }
                }
              }
            }]
          }
        }
      });
    });
  }).catch(()=> {

    return Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          stack: {
            children: [{
              component: {
                name: "IrvineApartments.AuthScreen",
                options: {
                  topBar: {
                    visible: false
                  }
                }
              }
            }]
          }
        }
      });
    });

  })
})



