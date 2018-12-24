import { createSwitchNavigator } from 'react-navigation';

import LoadingScreen from '../screens/LoadingScreen';
import UnauthModal from './UnauthorizedNavigator';
import HomeScreen from '../screens/HomeScreen';

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Unauth: UnauthModal,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Loading',
  },
);
