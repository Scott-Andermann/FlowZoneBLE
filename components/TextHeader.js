import { StyleSheet, Text, View } from 'react-native';
import { darkGreen, lightGreen, gunmetal, white, red } from './colors';

const TextHeader = ({title}) => {
    return ( 
        <Text style={styles.heading}>{title}</Text>
     );
}

const styles = StyleSheet.create({
    heading: {
        color: lightGreen,
        fontSize: '44px',
        paddingLeft: '1rem',
    }
})
 
export default TextHeader;