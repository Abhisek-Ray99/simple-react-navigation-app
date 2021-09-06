import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const Banner = () => {
    return (
        <View style={styles.bannerView}>
            <View style={styles.bannersection1}>
                <Text style={styles.bannerHeader}>Enjoy Outdoor Activities</Text>
                <Text style={styles.bannerText}>Let's break the barrier</Text>
                <TouchableOpacity style={styles.bannerbtn}>
                    <Text style={styles.bannerbtntext}>Read more</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bannersection2}>
                <Image source={require('../assets/img/o3.png')} style={styles.bannerImage} />
            </View>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    bannerView: {
        width: 350,
        height: 240,
        flexDirection: 'row',
        backgroundColor: '#5447B6',
        borderRadius: 35,
        margin: 20,
        padding: 10,
        elevation: 5,
    },

    bannersection1: {
        width: 200,
        padding: 14,
    },
    bannerHeader: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        flexShrink: 1,
    },
    bannerText: {
        fontSize: 16,
        color: '#8EA1E1',
    },
    bannerbtn: {
        width: 140,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginTop: 44,
    },
    bannerbtntext: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    bannersection2: {
        
    },
    bannerImage: {
        width: 130,
        height: 220,
    }
})
