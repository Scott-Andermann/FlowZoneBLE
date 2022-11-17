import { ScrollView, Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { darkGreen, lightGreen, gunmetal, white, red, rem } from '../components/colors';
import React, { useState, useEffect } from 'react';

import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { saveJob } from '../redux/slicers/jobSlice';

import { SelectList } from 'react-native-dropdown-select-list';

import Button from '../components/Button';
import Header from '../components/Header';

const CreateJobScreen = ({ navigation }) => {

    const [jobName, setJobName] = useState('');
    const [chemical, setChemical] = useState('');
    const [startTime, setStartTime] = useState('');
    const [notes, setNotes] = useState('');
    const [nozzle, setNozzle] = useState('');
    const [nozzleLevels, setNozzleLevels] = useState(undefined);
    const [started, setStarted] = useState(false)
    const [timer, setTimer] = useState(0);
    const [timeSpraying, setTimeSpraying] = useState(0); // this comes from BLE connection
    const [speedLevel, setSpeedLevel] = useState(1); // this comes from BLE connection
    const [volume, setVolume] = useState(0); // calculated value based on timeSpraying and speedLevel

    const dispatch = useDispatch();
    const nozzles = useSelector((state) => state.nozzles.value);
    const nozzleOptions = Object.keys(nozzles);
    const data = nozzleOptions.map((nozzle, index) => ({ key: index, value: nozzle }))
    // const data = [
    //     {key:'1', value:'Mobiles', disabled:true},
    //     {key:'2', value:'Appliances'},
    //     {key:'3', value:'Cameras'},
    //     {key:'4', value:'Computers', disabled:true},
    //     {key:'5', value:'Vegetables'},
    //     {key:'6', value:'Diary Products'},
    //     {key:'7', value:'Drinks'},
    // ]

    const handleNozzleSelection = (val) => {
        setNozzle(val);
        setNozzleLevels(nozzles[val]);
    }

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
        setTimeSpraying(0);
        setVolume(0);
    }

    useEffect(() => {
        if (started) {
            const interval = setInterval(() => {
                setTimer(prev => prev + .1);
                setTimeSpraying(prev => prev + .1);

            }, 100);
            return () => clearInterval(interval)
        }
    }
        , [started]);

    useEffect(() => {
        if (nozzleLevels) {
            setVolume(timeSpraying * nozzleLevels[speedLevel] / 60)
        }
    }, [timeSpraying]);

    // console.log(nozzleLevels);
    // console.log(volume);

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
            <View style={{ width: '100%' }}>
                <SelectList
                    boxStyles={styles.dropdown}
                    dropdownStyles={styles.dropdown}
                    setSelected={handleNozzleSelection}
                    data={data}
                    save='value' />
            </View>
            <Text style={{ color: white }}></Text>
            <ScrollView style={{ flex: 1, flexDirection: 'row', width: '100%', paddingLeft: 20 }}
                keyboardShouldPersistTaps='handled'>
                <View>
                    <Text style={styles.timer}>Duration of job: <Text style={{ ...styles.timer, ...styles.timerInset }}>{Math.floor(timer / 60)}m{Math.round(timer % 60)}s</Text></Text>
                    <Text style={styles.timer}>Spraying duration: <Text style={{ ...styles.timer, ...styles.timerInset }}>{Math.floor(timeSpraying / 60)}m{Math.round(timeSpraying % 60)}s</Text></Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.timer}>Total Chemical used: </Text>
                        <TextInput style={[styles.inputField, { width: 80, height: 20 }]} value={Math.floor(volume * 100) / 100} onChangeText={setVolume} keyboardType='numeric'></TextInput>
                        <Text style={styles.timer}> L</Text>
                    </View>
                    <Text style={styles.timer}>Current Power Setting: <Text style={{ ...styles.timer, ...styles.timerInset }}>{speedLevel}</Text></Text>
                </View>
            </ScrollView>
            <Button label={started ? 'Stop recording' : 'Start Job'} theme='centered' onPress={handleJobStatus} />
            <Button label='Save Job' theme='centered' onPress={handleSaveJob} disabled={started} />
            <Button label='View Jobs' theme='centered' onPress={() => navigation.navigate('prevJobs')} disabled={started} />
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
        paddingTop: 0.5 * rem,
    },
    inputField: {
        // margin: '0.5rem',
        marginTop: 0.5 * rem,
        backgroundColor: white,
        fontSize: 14,
        width: '100%',
        borderRadius: 3,
        paddingLeft: 20,
        paddingTop: 12,
        paddingBottom: 12,
    },
    dropdown: {
        marginTop: 0.5 * rem,
        backgroundColor: white,
        borderRadius: 3,
        fontSize: 14,
        border: 'none'
    },
    timer: {
        color: white,
        fontSize: 20,
        marginTop: 6,
    },
    timerInset: {
        color: red,
        fontSize: 24,
    },
    iosTextArea: {
        marginTop: 0.5 * rem,
        backgroundColor: white,
        fontSize: 14,
        minHeight: 80,
        width: '100%',
        paddingLeft: 20,
        paddingTop: 12,
        paddingBottom: 12,
    }
})

export default CreateJobScreen;