import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';
const Navigator = createStackNavigator(
  {
    Search: SearchScreen,
    DetailScreen: RestaurantDetailScreen,
  },
  {
    initiaRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    }
  }
)
export default createAppContainer(Navigator);