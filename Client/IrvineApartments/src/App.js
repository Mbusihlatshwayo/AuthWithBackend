import {Navigation} from 'react-native-navigation';

import AuthScreen from './Screens/AuthScreen';
import CreateAnAccount from './Screens/CreateAnAccount';

Navigation.registerComponent('IrvineApartments.AuthScreen', ()=> AuthScreen);
Navigation.registerComponent('IrvineApartments.CreateAnAccount', ()=> CreateAnAccount);

  Navigation.events().registerAppLaunchedListener(() => {
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
