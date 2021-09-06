import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


const Quotes = ({ navigation }) => {


    const [joke, setJoke] = useState('');
    const [answer, setAnswer] = useState('');
    const [tag, setTag] = useState('');

    const getJoke = () => {
        let url = `https://official-joke-api.appspot.com/jokes/random`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataJoke = data.setup;
                let dataAnswer = data.punchline;
                let tagline = data.type;
                setJoke(dataJoke);
                setAnswer(dataAnswer);
                setTag(tagline);

            }).catch(err => {
                console.warn("can't fetch the Quotes", err);
            })
    };

    useEffect(() => {
        getJoke()
    }, []);

    const handleClick = () => {
        getJoke();
    }

    return (
        <ScrollView>
            <View style={styles.container1}>
                <Image source={require('../assets/img/3d-monster.png')} style={styles.image} />
                <View style={styles.quoteContainer}>
                    <Text style={styles.quoteText}>{joke}😁</Text>
                    <Text style={styles.quoteAuthor}>{answer}</Text>
                    <Text style={styles.quoteTag}>#{tag}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleClick}>
                    <Text style={styles.buttonText}>Show New Joke</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
}

export default Quotes;

const styles = StyleSheet.create({
    container1: {
        borderRadius: 20,
        margin: 10,
        marginHorizontal: 16,
        height: 800,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5C5C78',
        elevation: 12,
    },
    quoteContainer: {
        borderRadius: 10,
        padding: 20,
        margin: 10,
    },
    image: {
        height: "30%",
        width: "80%",
    },
    quoteText: {
        fontSize: 24,
        color: '#171E3A',
        fontWeight: 'bold',
        backgroundColor: '#CCDACC',
        borderRadius: 10,
        textAlign: 'center',
        padding: 16,
    },
    quoteAuthor: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF8573',
        backgroundColor: '#F9F8E4',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'monospace',
    },
    quoteTag: {
        width: 110,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#71D6ED',
        backgroundColor: '#120731',
        padding: 4,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#C9506F',
        padding: 10,
        alignItems: "center",
        borderRadius: 15,
        marginBottom: 80,
        borderWidth: 2,
        borderColor: '#F5E9DB',
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingHorizontal: 50,
        paddingVertical: 10,
    },
    qbutton: {
        backgroundColor: '#F5E9DB',
        margin: 30,
        paddingHorizontal: 60,
        paddingVertical: 15,
        borderRadius: 14,
        elevation: 2,
    },
    qtext: {
        textAlign: 'center',
        color: '#FFA764',
        fontSize: 22,
        fontWeight: 'bold'
    }
});