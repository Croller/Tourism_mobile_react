import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Avia from '../components/Avia';
import Hotels from '../components/Hotels';

const Bottom = createBottomTabNavigator({
  Avia: {
    screen: Avia,
  },
  Hotels: {
    screen: Hotels,
  },
});

export default createAppContainer(Bottom);
