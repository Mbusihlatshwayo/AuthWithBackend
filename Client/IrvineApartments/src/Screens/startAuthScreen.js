import {Navigation} from 'react-native-navigation';


const startAuth = ()=>{


  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "IrvineApartments.AuthScreen",
            options: {
              topBar: {
                visible: false,
              }
            }
          }
        }]
      }
    }
  });

}

export default startAuth;