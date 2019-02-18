import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

export default createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
  },
  {
    initialRouteName: 'Home',
  },
);
