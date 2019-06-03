import { Navigation } from 'react-native-navigation';


const startAuthScreen = ()=>{
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
}

export default startAuthScreen