/*eslint-disable*/
import {Image} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import screens
import SplaceScreen from './src/Screens/SplashScreen/SplashScreen';
import SignIn_Screen from './src/Screens/AuthScreen/SignIn_Screen';
import Register_Screen from './src/Screens/AuthScreen/Register_Screen';
import SquardyScreen from './src/Screens/UserScreen/Squardy';
import FoodScreen from './src/Screens/UserScreen/Food';
import AddRecipe from './src/Screens/UserScreen/AddRecipe';
import UserAddedRecipe from './src/Screens/UserScreen/UserAddedRecipe';
import EditScreen from './src/Screens/UserScreen/EditScreen';
import MyRecipe from './src/Screens/UserScreen/MyRecipe';
// components
import TopRated from './src/Components/TopRated';
// initialize navigater
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// components
const TabScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName="UserHome"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#2b7748',
        tabBarInactiveTintColor: '#514e4e',
      }}>
      <Tab.Screen
        name="Squardy"
        component={SquardyScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <Image
              source={require('./src/assets/swiggy.png')}
              style={{width: 27, height: 27}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <Image
              source={require('./src/assets/tray.png')}
              style={{width: 27, height: 27}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Recipe"
        component={AddRecipe}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <Image
              source={require('./src/assets/add.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Your Recipe"
        component={UserAddedRecipe}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <Image
              source={require('./src/assets/recipe.png')}
              style={{width: 27, height: 27}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplaceScreen"
          component={SplaceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={SignIn_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserHome"
          component={TabScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Food"
          component={FoodScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyRecipe"
          component={MyRecipe}
          options={({navigation}) => ({
            headerShown: false,
            // tabBarIcon: ({focused}: any) => (
            //   <Image
            //     source={require('./src/assets/recipe.png')}
            //     style={{width: 27, height: 27}}
            //   />
            // ),
            headerTitle: () => <TopRated navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
/*eslint-disable*/
