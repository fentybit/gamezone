import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
});

export default AboutStack;