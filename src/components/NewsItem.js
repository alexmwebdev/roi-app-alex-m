import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
//import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { Ionicons } from '@expo/vector-icons';
import { Card, Title, Paragraph, Avatar, IconButton } from 'react-native-paper';

const styles = StyleSheet.create({
    card: {
        marginTop: 20
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
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
        paddingLeft:15,
        paddingRight:15
    }
});

const PeopleItem = (props) => {
    
    const {firstName, lastName, company, newstitle, author, content} = props.people

    const getAvatarLabel = (firstName, lastName) => {

        return `${firstName[0]}${lastName[0]}`.toUpperCase()
    }

    return (
            <View>
                <Card.Title
                    title={`${newstitle}`}
                    subtitle={`${author}`}
                    left={(props) => <Ionicons name="newspaper-outline" color={'rgb(148,26,29)'} size={24} {...props} label={getAvatarLabel(firstName, lastName)} />}
                />
                <Text style={styles.text}>{content}</Text>
            </View>
    )
}

export default connect(null, actions)(PeopleItem);