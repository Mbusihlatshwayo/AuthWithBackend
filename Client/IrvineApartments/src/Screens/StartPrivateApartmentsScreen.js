import {Navigation} from 'react-native-navigation';


const startPrivateApartmentViewing = ()=>{


  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "IrvineApartments.PrivateApartmentsScreen",
            options: {
              topBar: {
                visible: true,
                title: {
                  text: 'Private listings!'
                }
              }
            }
          }
        }]
      }
    }
  });

}

export default startPrivateApartmentViewing;
