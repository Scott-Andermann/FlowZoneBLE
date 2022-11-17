import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { darkGreen, lightGreen, gunmetal, white, red } from './src/components/colors';
import React, {useState} from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store'


import HomeScreen from './src/screens/HomeScreen';
import CreateJobScreen from './src/screens/CreateJobScreen';
import PreviousJobsScreen from './src/screens/PreviousJobsScreen';
import HamburgerButton from './src/components/HamburgerButton';
import MenuModal from './src/components/MenuModal';

const Stack = createNativeStackNavigator();

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const headerOptions = {
    headerStyle: {
      backgroundColor: darkGreen,
    },
    headerTintColor: white,
  }
  // const headerRight = {
  //   headerRight: () => (
  //     <HamburgerButton
  //       onPress={() => {
  //         setModalVisible(!modalVisible);
  //         alert('Menu modal is not hooked up to navigation')
  //       }}
  //     />
  //   )

  // }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='createJob' screenOptions={{ ...headerOptions }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'FlowZone TruFlow' }} />
          <Stack.Screen name="createJob" component={CreateJobScreen} options={{ title: 'Create Job' }}/>
          <Stack.Screen name="prevJobs" component={PreviousJobsScreen} options={{ title: 'Previous Jobs' }} />
          <Stack.Screen name="createNozzle" component={CreateJobScreen} options={{ title: 'Create Nozzle Profile' }} />
          <Stack.Screen name="viewSprayer" component={CreateJobScreen} options={{ title: 'Sprayer Details' }} />
          <Stack.Screen name="techProfile" component={CreateJobScreen} options={{ title: 'Technician Profile' }} />
          <Stack.Screen name="Modal" component={MenuModal} options={{presentation: 'transparentModal'}} />
        </Stack.Navigator>
        <MenuModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        <StatusBar style='auto'/>
      </NavigationContainer>
    </Provider>
  );
}

// const darkGreen = '#507e3a';
// const lightGreen = '#94c43e';
// const gunmetal = '#0a2e36';
// const white = '#fff';
// const red = '#e65f5c';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: gunmetal,
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     color: white
//   },
//   text: {
//     color: white,
//     fontSize: '30px'
//   },
//   heading: {
//     color: lightGreen,
//     fontSize: '50px'
//   }
// });