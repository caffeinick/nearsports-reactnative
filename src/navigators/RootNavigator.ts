import { createSwitchNavigator } from 'react-navigation';

import LoadingScreen from '../screens/LoadingScreen';
import UnauthModal from './UnauthorizedNavigator';
import AuthStack from './AuthorizedNavigator';

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Unauth: UnauthModal,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  },
);
