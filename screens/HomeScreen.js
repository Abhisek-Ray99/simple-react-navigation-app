import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import Banner from '../components/Banner';


const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View
                    style={{
                        marginRight: 10
                    }}
                >
                    <TouchableOpacity
                        style={styles.touchbutton}
                        onPress={() => navigation.navigate('counter')}
                    >
                        <Text style={styles.cTitle}>Counter Screen</Text>
                    </TouchableOpacity>
                </View>
            )
        });
    }, [navigation])


    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#FF7079" />
            <Banner />
            <TouchableOpacity
                style={styles.inbutton}
                onPress={() => navigation.navigate('Palettes')}
            >
                <Text style={styles.intext}>Select ColorPalette</Text>
                <Image source={require('../assets/img/developer_essential_track.c533d13c.png')} style={styles.Btnimage} />
            </TouchableOpacity>
            <View style={styles.imgcontainer}>
                <TouchableOpacity>
                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#E6F5F1', '#D3F2EA']}
                        style={styles.imgsubcontainer1}>
                        <Image source={require('../assets/img/3drobot1.png')} style={styles.img1} />
                        <Text style={styles.text1}>Shapes</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#FDF7E5', '#F4E7CA']}
                        style={styles.imgsubcontainer2}>
                        <Image source={require('../assets/img/3drobot2.png')} style={styles.img2} />
                        <Text style={styles.text2}>Humans</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E3C6B5'
    },
    touchbutton: {
        backgroundColor: '#F5E9DB',
        padding: 10,
        borderRadius: 14,
    },
    cTitle: {
        textAlign: 'center',
        color: '#FFA764',
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        width: 200,
        height: 200
    },
    inbutton: {
        flexDirection: 'row',
        backgroundColor: '#5447B6',
        padding: 20,
        elevation: 2,
        borderRadius: 10,
        elevation: 2,
    },
    intext: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginTop: 7,
        fontFamily: 'monospace'
    },
    Btnimage: {
        width: 60,
        height: 30,
        padding: 22,
        marginLeft: 10,
    },
    imgcontainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-between',
        width: 340,
        height: 220,
        margin: 20,
        padding: 10,
    },
    imgsubcontainer1: {
        width: 150,
        height: 200,
        borderRadius: 10,
        elevation: 2,
    },
    imgsubcontainer2: {
        width: 150,
        height: 200,
        borderRadius: 10,
        elevation: 2,
    },
    img1: {
        width: 150,
        height: 150,
    },
    text1: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    img2: {
        width: 80,
        height: 140,
        marginHorizontal: 34,
        marginTop: 10
    },
    text2: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
