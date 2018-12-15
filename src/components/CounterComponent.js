import React, { Component } from "react";
import {
    View, Text, Image,
    TouchableOpacity,
    StyleSheet, Platform,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get('window')
export default class CounterComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>
                        Redux Saga tutorials
                    </Text>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonTitle}>
                            Increment +
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonTitle}>
                            Decrement -
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'red' }}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 34 : 0
    },
    viewTitle: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'forestgreen'
    },
    viewButton: {
        height: 80,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 12,
        paddingRight: 12,
        backgroundColor: 'blue'
    },
    button: {
        height: 45,
        borderRadius: 10,
        backgroundColor: 'darkviolet',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTitle: {
        fontSize: 18,
        color: 'white'
    }
})