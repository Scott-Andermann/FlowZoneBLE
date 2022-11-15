import { StyleSheet, Text, View, TextInput, SliderComponent } from 'react-native';
import { darkGreen, lightGreen, gunmetal, white, red } from '../components/colors';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';

import Button from '../components/Button';
import Header from '../components/Header';

const CreateJobScreen = () => {

    const [jobName, setJobName] = useState('');
    const [chemical, setChemical] = useState('');
    const [startTime, setStartTime] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [nozzle, setNozzle] = useState('');
    const [started, setStarted] = useState(false)
    const [timer, setTimer] = useState(0);

    let interval;

    const handleJobStatus = () => {
        if (started) {
            setStarted(false);
            alert('Recording stopped')
        } else {
            setStarted(true);
            alert('Started recording')
        }
    }

    const saveJob = () => {
        const jobData = {
            jobName: jobName,
            chemical: chemical,
            startTime: startTime,
            notes: notes,
            nozzle: nozzle,
            duration: timer
        }
        // send jobData to redux store
        console.log(jobData);
        setJobName('');
        setChemical('');
        setStartTime('');
        setNotes('');
        setTimer(0);
    }

    const buildClock = () => {
        const seconds = timer % 60;
        const minutes = Math.floor(timer / 60) 
    }

    useEffect(() => {
        if (started) {
            const interval = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
            return () => clearInterval(interval)}
        }
    , [started]);

    return ( 
    <View style={styles.container}>
        <TextInput 
        style={styles.inputField}
        onChangeText={setJobName}
        value={jobName}
        placeholder="Job Name"
        />
        <TextInput 
        style={styles.inputField}
        onChangeText={setChemical}
        value={chemical}
        placeholder="Chemical"
        />
        <TextInput 
        style={styles.inputField}
        onChangeText={setNotes}
        value={notes}
        placeholder="Add Notes"
        multiline={true}
        numberOfLines={3}
        />
        <TextInput 
        style={styles.inputField}
        onChangeText={setNozzle}
        value={nozzle}
        placeholder="Nozzle"
        />
        <Text style={styles.timer}>Duration of job: <Text style={{...styles.timer, ...styles.timerInset}}>{Math.floor(timer / 60)}m{timer % 60}s</Text></Text>
        <Button label={started ? 'Stop recording' : 'Start Job'} theme='centered' onPress={handleJobStatus}/>
        <Button label='Save Job' theme='centered' onPress={saveJob}/>
    </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: gunmetal,
        padding: '1rem',
        paddingTop: '0.5rem'
    },  
    inputField: {
        // margin: '0.5rem',
        marginTop: '0.5rem',
        backgroundColor: white,
        fontSize: 20,
        width: '100%',
    },
    timer: {
        color: white,
        fontSize: 20,
    },
    timerInset: {
        color: red,
        fontSize: 24,
    }
})
 
export default CreateJobScreen;