import React from 'react';
import {NavigationContainer}from '@react-navigation/native';
import {CardStyleInterpolators,createStackNavigator}from '@react-navigation/stack';
import { Image,StyleSheet,TouchableOpacity,View } from 'react-native';

import HomeScreen from './screen/HomeScreen';
import MessageScreen from './screen/MessageScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
        <Stack.Screen 
        name=" " 
        component={HomeScreen}
        options={{ 
          headerStyle: {
            height:0,
          },
          
        }}
        /> 
      
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{ 
            title:" ",
            headerStyle: {
              height:0,
              backgroundColor:'#fafafa',
            },
            headerLeft: null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerLeft:{
    marginLeft: 10,
    width: 350,
    height: 35
  },
  headerRight:{
    marginRight: 10,
    width: 30,
    height: 35
  },
});

export default App;


/*headerLeft: () => <Image source={{uri: headerData.HMPage.HeaderLeftUrl}} style={styles.headerLeft}/>,
          headerRight: () => {
              return (
                  <TouchableOpacity
                      onPress={() => navigation.navigate('MessageScreen')}>
                      <Image source={{uri: headerData.HMPage.HeaderRightUrl}}
                              style={styles.headerRight}/>
                  </TouchableOpacity>
              )
          },*/

/*options={{
              title: ' ',
              headerLeft: () => {
                  return (
                      <TouchableOpacity style={{marginLeft: 15}}
                        onPress={() => rootNavigationRef.current?.navigate('HomeScreen')}>
                        <Image source={{uri: headerData.MSPage.HeaderLeftUrl}}
                          style={styles.headerLeft}/>
                      </TouchableOpacity>
                  )
              },
              headerRight: () => <Image source={{uri: headerData.MSPage.HeaderRightUrl}} style={styles.headerRight}/>
          }}*/