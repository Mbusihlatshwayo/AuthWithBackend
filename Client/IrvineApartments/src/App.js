import {Navigation} from 'react-native-navigation';

import AuthScreen from './Screens/AuthScreen';

Navigation.registerComponent('IrvineApartments.AuthScreen', ()=> AuthScreen);

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: "IrvineApartments.AuthScreen"
        }
      }
    });
  });

