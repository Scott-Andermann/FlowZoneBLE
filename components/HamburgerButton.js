import { StyleSheet, Text, View, Pressable } from 'react-native';
import { darkGreen, lightGreen, gunmetal, white, red } from './colors';

const HamburgerButton = ({label, theme, onPress}) => {
    return ( 
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <View style={{...styles.hamburger, marginTop: 0}}/>
                <View style={styles.hamburger}/>
                <View style={styles.hamburger}/>
                <Text style={styles.buttonLabel}></Text>
            </Pressable>
        </View>
     );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 50,
        height: 50,
        backgroundColor: lightGreen,
        marginRight: '1rem',
        borderRadius: 5
    },
    button: {
        // borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 30
    },
    hamburger: {
        backgroundColor: white,
        height: 3,
        width: 32,
        marginTop: 8
    }
})
 
export default HamburgerButton;