import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { darkGreen, lightGreen, gunmetal, white, red, rem } from '../components/colors';
import React, { useState, useEffect } from 'react';

import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { saveJob } from '../redux/slicers/jobSlice';

import {SelectList} from 'react-native-dropdown-select-list';

import Button from '../components/Button';
import Header from '../components/Header';

const CreateJobScreen = ({navigation}) => {

    const [jobName, setJobName] = useState('');
    const [chemical, setChemical] = useState('');
    const [startTime, setStartTime] = useState('');
    const [notes, setNotes] = useState('');
    const [nozzle, setNozzle] = useState('');
    const [started, setStarted] = useState(false)
    const [timer, setTimer] = useState(0);
    const [timeSpraying, setTimeSpraying] = useState(0);
    const [volume, setVolume] = useState(0);

    const dispatch = useDispatch();
    const nozzleOptions = Object.keys(useSelector((state) => state.nozzles.value));

    const handleJobStatus = () => {
        if (started) {
            setStarted(false);
            alert('Recording stopped')
        } else {
            setStarted(true);
            setStartTime(Date.now());
            // alert('Started recording');
        }
    }

    const handleSaveJob = () => {
        const jobData = {
            id: nanoid(),
            jobName: jobName,
            chemical: chemical,
            startTime: startTime,
            notes: notes,
            nozzle: nozzle,
            duration: timer
        }
        // console.log(jobData);
        // TODO: validate fields before sending to redux store (including duration of job)
        dispatch(saveJob(jobData));
        setJobName('');
        setChemical('');
        setStartTime('');
        setNotes('');
        setTimer(0);
    }

    useEffect(() => {
        if (started) {
            const interval = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
            return () => clearInterval(interval)}
        }
    , [started]);

    useEffect(() => {
        setVolume(timeSpraying * nozzle / 60)
    }, [timeSpraying]);

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
        style={Platform.OS === 'ios' ? styles.iosTextArea : styles.inputField}
        onChangeText={setNotes}
        value={notes}
        placeholder="Add Notes"
        multiline={true}
        numberOfLines={3}
        />
        {/* <TextInput 
        style={styles.inputField}
        onChangeText={setNozzle}
        value={nozzle}
        placeholder="Nozzle"
        /> */}
        <SelectList 
            boxStyles={styles.inputField}
            dropdownStyles={styles.inputField}
            setSelected={(val) => setNozzle(val)}
            data={nozzleOptions}
            save='value'/>
        <Text style={styles.timer}>Duration of job: <Text style={{...styles.timer, ...styles.timerInset}}>{Math.floor(timer / 60)}m{timer % 60}s</Text></Text>
        <Button label={started ? 'Stop recording' : 'Start Job'} theme='centered' onPress={handleJobStatus}/>
        <Button label='Save Job' theme='centered' onPress={handleSaveJob}/>
        <Button label='View Jobs' theme='centered' onPress={() => navigation.navigate('prevJobs')}/>
    </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: gunmetal,
        padding: rem,
        paddingTop: 0.5 * rem
    },  
    inputField: {
        // margin: '0.5rem',
        marginTop: 0.5 * rem,
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
    },
    iosTextArea: {
        marginTop: 0.5 * rem,
        backgroundColor: white,
        fontSize: 20,
        minHeight: 80,
        width: '100%',
    }
})
 
export default CreateJobScreen;