import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
//import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { Card, Title, Paragraph, Avatar, IconButton } from 'react-native-paper';

const styles = StyleSheet.create({
    card: {
        marginTop: 20
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
        fontFamily:'Trebuchet Bold'
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    text: {
        color:'rgb(38,38,38)',
        fontFamily:'Trebuchet'
    }
});

const PeopleItem = (props) => {
    
    const {firstName, lastName, company} = props.people

    const getAvatarLabel = (firstName, lastName) => {

        return `${firstName[0]}${lastName[0]}`.toUpperCase()
    }

    return (
        <TouchableWithoutFeedback 
            onPress={() => props.selectPerson(props.people)}>
            <View style={styles.text}>
                <Card.Title
                    title={`${firstName} ${lastName}`}
                    subtitle={`${company}`}
                    left={(props) => <Avatar.Text color={'white'} style={{backgroundColor: 'rgb(148,26,29)'}} size={24} {...props} label={getAvatarLabel(firstName, lastName)} />}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default connect(null, actions)(PeopleItem);