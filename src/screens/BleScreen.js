import { StyleSheet, View, Text } from 'react-native';
// import { BleManager, Device } from 'react-native-ble-plx';

// const manager = new BleManager();

const BleScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Step One</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
    },

});

export default BleScreen;