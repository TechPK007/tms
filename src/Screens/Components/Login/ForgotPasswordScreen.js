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
export default function ForgotPasswordScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setError(false);
    }
  }, [email]);
  const handleSubmit = () => {
    if (email === '') {
      setError(true);
      return;
    }
    navigation.navigate('Home', {name: 'Drawer Nav'});
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./../../../../assets/logo.png')}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          // placeholderTextColor="#fff"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
      {error ? (
        <Text style={styles.error}>Please Enter Valid Email</Text>
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
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'blue',
  },
  loginText: {
    color: '#fff',
  },
  error: {
    color: 'red',
    fontWeight: 600,
  },
});
