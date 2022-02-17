import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import NewPost from '../pages/NewPost';
import PostsUser from '../pages/PostsUser';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Principal" 
      component={Home} 
      options={{ headerShown: false }} 
      />

      <Stack.Screen 
      name="NewPost"
      component={NewPost}
      options={{
        title: 'Novo Post',
        headerTintColor: '#000000',
        headerStyle: {
          backgroundColor: '#FFF'
        }
      }}
      />

      <Stack.Screen
      name="PostsUser" 
      component={PostsUser} 
      options={{
        headerTintColor: '#000000',
        headerStyle:{
          backgroundColor:'#FFF'
        }
      }}
      />
    </Stack.Navigator>
  );
}



function AppRoutes() {
 return (
   <Tab.Navigator
   tabBarOptions={{
     keyboardHidesTabBar: true,
     showLabel: false,
     style:{
       backgroundColor: '#202225',
       borderTopWidth: 0,
     },

     activeTintColor: '#000000'
   }}
   >
       <Tab.Screen 
       name="Home" 
       component={StackScreen} 
       options={{ headerShown: false,
         tabBarIcon: ({ color, size }) => {
          return <Feather name="home" color={color} size={size} />
         }
       }}
       />

       <Tab.Screen 
       name="Search" 
       component={Search} 
       options={{ headerShown: false,
          tabBarIcon: ({ color, size }) => {
          return <Feather name="search" color={color} size={size} />
          }
        }}       
       />

       <Tab.Screen 
       name="Profile" 
       component={Profile} 
       options={{ headerShown: false,
          tabBarIcon: ({ color, size }) => {
          return <Feather name="user" color={color} size={size} />
          }
        }}       
       />
   </Tab.Navigator>
  );
}

export default AppRoutes;