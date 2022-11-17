import { StyleSheet, Text, View } from 'react-native';
import { darkGreen, lightGreen, gunmetal, white, red } from '../components/colors';
import { StatusBar } from 'expo-status-bar';


import TextHeader from '../components/TextHeader';
import Button from '../components/Button';
import MenuModal from '../components/MenuModal';

const HomeScreen = ({navigation}) => {
    return ( 
    <View style={styles.container}>
        <TextHeader title='Main Menu'></TextHeader>
        <Button label='Create Job' onPress={() => navigation.navigate('createJob')}/>
        <Button label='Previous Jobs' onPress={() => navigation.navigate('prevJobs')}/>
        <Button label='Create Nozzle' onPress={() => navigation.navigate('createNozzle')}/>
        <Button label='View Sprayer' onPress={() => navigation.navigate('viewSprayer')}/>
        <Button label='Technician Profile' onPress={() => navigation.navigate('createJob')}/>
        {/* <Button label='Modal' onPress={() => navigation.navigate('Modal')}/> */}

        <StatusBar style="auto" />
      </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: gunmetal,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      color: white,
      padding: '0.5rem',
    },
    text: {
      color: white,
      fontSize: '30px'
    },
    heading: {
      color: lightGreen,
      fontSize: '50px'
    }
});
 
export default HomeScreen;