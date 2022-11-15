import { StyleSheet, Text, View } from 'react-native';
import { darkGreen, lightGreen, gunmetal, white, red } from './colors';

const Header = ({title}) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
        width: '100vw'
    },
    heading: {
        color: white,
        backgroundColor: darkGreen,
        fontSize: '44px',
        paddingLeft: '1rem',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4rem'
    }
});

export default Header;