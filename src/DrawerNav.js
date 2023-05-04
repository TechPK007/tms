import * as React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import YardScreen from './Screens/Components/YardScreen/YardScreen';
import {useToast} from 'react-native-toast-notifications';

function EpodScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>EPOD</Text>
      <Button
        onPress={() => navigation.goBack()}
        title="Go to Yard Management"
      />
    </View>
  );
}

function CustomDrawerContent(props) {
  const Toast = useToast();
  const handleLogout = () => {
    Toast.show('Logged Out Succesfully');
    props.navigation.navigate('Login', {name: 'Login'});
  };
  return (
    <SafeAreaView
      style={{flex: 1}}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          label={'Logout'}
          style={styles.logoutDrawerItem}
          onPress={() => handleLogout()}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  logoutDrawerItem: {
    fontWeight: '700',
  },
});
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Yard Management" component={YardScreen} />
      <Drawer.Screen name="Epod" component={EpodScreen} />
    </Drawer.Navigator>
  );
}
