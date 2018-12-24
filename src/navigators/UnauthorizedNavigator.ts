import { createStackNavigator } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';

export default createStackNavigator(
  {
    Landing: LandingScreen,
  },
  {
    initialRouteName: 'Landing',
  },
);
