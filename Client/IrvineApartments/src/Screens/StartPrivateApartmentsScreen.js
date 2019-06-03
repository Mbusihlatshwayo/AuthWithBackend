import {Navigation} from 'react-native-navigation';


const startPrivateApartmentViewing = ()=>{

    return Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
          root: {
            stack: {
              children: [{
                component: {
                  name: "IrvineApartments.PrivateApartmentsScreen",
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

}

export default startPrivateApartmentViewing;
