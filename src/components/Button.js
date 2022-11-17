import { StyleSheet, Text, View, Pressable } from 'react-native';
import { darkGreen, lightGreen, gunmetal, white, red, rem } from './colors';

const Button = ({label, theme, onPress}) => {
    if (theme === 'menu') {
        return (
            <View style={menuStyles.buttonContainer}>
                <Pressable style={menuStyles.button} onPress={onPress}>
                    <Text style={menuStyles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>

        );
    }
    if (theme === 'centered') {
        return (
            <View style={centeredStyles.buttonContainer}>
                <Pressable style={centeredStyles.button} onPress={onPress}>
                    <Text style={centeredStyles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>

        );
    }


    return ( 
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
     );
}

const menuStyles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 50,
        // height: 68,
        // marginHorizontal:20,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: darkGreen,
        borderBottomWidth: 1,
        borderBottomColor: lightGreen
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 30
    }
});

const centeredStyles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 50,
        // height: 68,
        // marginHorizontal:20,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: darkGreen,
        borderBottomWidth: 1,
        borderBottomColor: lightGreen
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 30
    }
});

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 68,
        // height: 68,
        // marginHorizontal:20,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: darkGreen,
        borderBottomWidth: 1,
        borderBottomColor: lightGreen
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 32
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 30
    }
})
 
export default Button;