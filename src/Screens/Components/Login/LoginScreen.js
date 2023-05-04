import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {setClientToken} from '../../../APIKit';
import {useToast} from 'react-native-toast-notifications';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {
  SET_LOCATION_ID,
  SET_TENANT_ID,
  SET_USER_ID,
  SET_WAREHOUSE_ID,
} from '../../../store/type';

export default function LoginScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {apiUrl, locationId, tenantId, userId, warehouseId} = useSelector(
    store => store.commonComponent,
  );
  const Toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setError(false);
    }
  }, [userName, password]);
  const handleSubmit = () => {
    if (userName === '' || password === '') {
      setError(true);
      Toast.show('Please enter username and password');
      return;
    } else {
      const payload = {userName, password};
      setIsLoading(true);
      axios
        .post(`${apiUrl}auth/app-user/login`, payload)
        .then(res => {
          setIsLoading(false);
          console.log('response', res.data);
          const {warehouseId, tenant_id, user_id, location_branch_master_id} =
            res?.data;
          if (res?.data?.email) {
            dispatch({type: SET_WAREHOUSE_ID, payload: warehouseId});
            dispatch({type: SET_TENANT_ID, payload: tenant_id});
            dispatch({type: SET_USER_ID, payload: user_id});
            dispatch({
              type: SET_LOCATION_ID,
              payload: location_branch_master_id,
            });
            Toast.show('Logged in Successfully 👋');
            setClientToken(res?.data.jwttoken);
            navigation.navigate('Home', {name: 'Drawer Nav'});
          } else {
            Toast.show(res?.data?.status);
          }
        })
        .catch(error => {
          setIsLoading(false);
          console.log('error', JSON.stringify(error));
          Toast.show('There is something Wrong 👋');
        });
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword', {name: 'Forgot Password'});
  };

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Image
        style={styles.image}
        source={require('./../../../../assets/logo.png')}
      />
      <Text style={styles.loginHeading}>
        Welcome to Transport Management System{' '}
      </Text>
      <Text style={styles.loginSubheading}>Sign in into your account </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          //   placeholderTextColor="#fff"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={userName => setUserName(userName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          //   placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text
          style={styles.forgot_button}
          onPress={() => handleForgotPassword()}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmit()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      {error ? (
        <Text style={styles.error}>
          Please Enter Valid Username and Password
        </Text>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    // backgroundColor: '#2525d0',
    borderWidth: 2,
    borderColor: '#2525d0',
    borderRadius: 30,
    width: '80%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    color: '#000',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: '#000',
    width: '100%',
  },
  forgot_button: {
    marginBottom: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'blue',
  },
  loginText: {
    color: '#fff',
  },
  error: {
    color: 'red',
    fontWeight: 600,
  },
  loginHeading: {
    color: '#292666',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center',
  },
  loginSubheading: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
