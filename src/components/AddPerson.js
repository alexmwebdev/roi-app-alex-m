import React, { Component } from 'react';
import { KeyboardAvoidingView, ImageBackground, View, Text, StyleSheet, ScrollView, } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { TextInput, Button, Headline } from 'react-native-paper';
import UpdatePerson from './UpdatePerson';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
   
    addButton: {
        marginTop: 20
    },
    inputField: {
        margin: 2
    },
    headline: {
        color:"rgb(255,255,255)",
        textAlign:"center",
        fontFamily: "Trebuchet",
        marginBottom:20,
        marginTop:0
    },
    image: {
        flex:1
    }
});

class AddPerson extends Component {

    state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        project: '',
        notes: ''
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }

    formUpdate({prop, value}) {
        this.setState(prevState => ({...prevState, [prop]: value}))
    }

    onAddPress() {
        const { firstName, lastName, phone, email, company, project, notes } = this.state;

        this.props.addPerson({ firstName, lastName, phone, email, company, project, notes});

        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            company: '',
            project: '',
            notes: ''
        })

        this.props.navigation.navigate('People List');
    }

    render() {
        if(this.props.toUpdate) {
            return <UpdatePerson backToPeopleList={() => this.props.navigation.navigate("People List")}/>
        }

        return (
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset='10'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={require('../images/roi-background.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.form}>
                    <Headline style={styles.headline}>Add a new contact</Headline>
                    <TextInput
                        style={styles.inputField}
                        label="First name"
                        value={this.state.firstName}
                        onChangeText={value => this.formUpdate({ prop: 'firstName', value})}
                    />
                    <TextInput
                        style={styles.inputField}
                        label="Last name"
                        value={this.state.lastName}
                        onChangeText={value => this.formUpdate({ prop: 'lastName', value})}
                    />
                    <TextInput
                        style={styles.inputField}
                        label="Phone number"
                        value={this.state.phone}
                        onChangeText={value => this.formUpdate({ prop: 'phone', value})}
                    />                    
                    <TextInput
                        style={styles.inputField}
                        label="Email"
                        value={this.state.email}
                        onChangeText={value => this.formUpdate({ prop: 'email', value})}
                    />                    
                    <TextInput
                        style={styles.inputField}
                        label="Department"
                        value={this.state.company}
                        onChangeText={value => this.formUpdate({ prop: 'company', value})}
                    />                    
                    <TextInput
                        style={styles.inputField}
                        label="Project"
                        value={this.state.project}
                        onChangeText={value => this.formUpdate({ prop: 'project', value})}
                    />                    
                    <TextInput
                        style={styles.inputField}
                        label="Notes"
                        value={this.state.notes}
                        onChangeText={value => this.formUpdate({ prop: 'notes', value})}
                    />                       
                    <View style={styles.addButton}>
                        <Button color={'white'} style={{backgroundColor: 'rgb(148,26,29)'}} mode="contained" onPress={this.onAddPress.bind(this)}>
                            Add Contact
                        </Button>
                    </View>
                    
                </View>
                </ImageBackground>
            </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = state => {
    const toUpdate = state.toUpdate;
    return {
        toUpdate
    }
}

export default connect(mapStateToProps, actions)(AddPerson);