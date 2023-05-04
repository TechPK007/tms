/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import LoginScreen from './Screens/Components/Login/LoginScreen';
import ForgotPasswordScreen from './Screens/Components/Login/ForgotPasswordScreen';
import DrawerNav from './DrawerNav';
import YardScreen from './Screens/Components/YardScreen/YardScreen';
import {Provider} from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ToastProvider>
          <SafeAreaView style={backgroundStyle}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{title: 'Login'}}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{title: 'Forgot Password'}}
              />
              <Stack.Screen
                name="Home"
                component={DrawerNav}
                options={{headerShown: false}}
              />
              {/* <Stack.Screen
            name="YardScreen"
            component={YardScreen}
            options={{title: 'Yard Management', headerLeft: undefined}}
          /> */}
            </Stack.Navigator>
          </SafeAreaView>
        </ToastProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  scrollView: {
    backgroundColor: 'red',
    color: 'blue',
  },
});

export default App;
