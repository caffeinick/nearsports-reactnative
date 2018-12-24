import { createSwitchNavigator } from 'react-navigation';

import UnauthorizedModal from './UnauthorizedNavigator';
import HomeScreen from '../screens/HomeScreen';

export default createSwitchNavigator(
  {
    Unauthorized: UnauthorizedModal,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Unauthorized',
  },
);
