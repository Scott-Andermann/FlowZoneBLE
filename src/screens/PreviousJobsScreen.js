import { StyleSheet, Text, View } from 'react-native';
import { darkGreen, lightGreen, gunmetal, white, red, rem} from '../components/colors';
import {useSelector, useDispatch} from 'react-redux';
import { deleteJob } from '../redux/slicers/jobSlice';
import Button from '../components/Button';

const PreviousJobsScreen = () => {
    const jobs = useSelector((state) => state.jobs.value)
    const dispatch = useDispatch();

    const handleOnPress = (id) => {
      console.log('delete item');
      // TODO: add confirm deleting job
      dispatch(deleteJob(id))
    }

    // console.log(jobs);
    return ( 
    <View style={styles.container}>
        {jobs.length > 0 && jobs.map(job => {
          // const jobData = job.jobData
          return (
            <View key={job.id}>
              <Text style={styles.text}>{job.id}</Text>
              <Text style={styles.text}>{job.jobName}</Text>
              <Button label='Delete' onPress={() => handleOnPress(job.id)}/>
            </View>

          )
        })}
        <Button label='Export Jobs' onPress={() => console.log(jobs)} />
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
  text: {
    color: white
  }
})

 
export default PreviousJobsScreen;