import React, { Component } from 'react';
import { KeyboardAvoidingView, ImageBackground, View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { TextInput, Button, Headline } from 'react-native-paper';
import { CurrentRenderContext } from '@react-navigation/native';
//import { orange100 } from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    updateButton: {
        marginTop: 20,
    },
    image: {
        flex:1
    },
    headline: {
        color:"rgb(148,26,29)",
        textAlign:"center",
        fontFamily: "Trebuchet",
        marginBottom:20,
        fontWeight:'bold'
    }
});

class UpdatePerson extends Component {

    state = {
        firstName: this.props.person.firstName,
        lastName: this.props.person.lastName,
        phone: this.props.person.phone,
        address: this.props.person.address,
        company: this.props.person.company,
        project: this.props.person.project,
        notes: this.props.person.notes,
        id: this.props.person.id
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'plus'} size={50} color={red} />
        )
    }

    formUpdate({prop, value}) {
        this.setState(prevState => ({...prevState, [prop]: value}))
    }

    onUpdatePress() {
        const { firstName, lastName, phone, address, company, project, notes, id } = this.state;

        this.props.updatePersonData({ firstName, lastName, phone, address, company, project, notes, id});

        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            company: '',
            project: '',
            notes: '',
            id: ''
        })

        this.props.backToPeopleList()
    }

    onCancelPress() {
        this.props.noneSelected()
        this.props.backToPeopleList()
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset='-10'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Headline style={styles.headline}>Update contact</Headline>
                    <ImageBackground source={require('../images/roi-background.png')} resizeMode="cover" style={styles.image}>
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
                        label="Address"
                        value={this.state.address}
                        onChangeText={value => this.formUpdate({ prop: 'address', value})}
                    />                    
                    <TextInput
                        style={styles.inputField}
                        label="Company"
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
                    </ImageBackground>                 
                    <View style={styles.updateButton}>
                        <Button color={'white'} style={{backgroundColor: 'rgb(148,26,29)'}} mode="contained" onPress={this.onUpdatePress.bind(this)}>
                            Update
                        </Button>
                    </View>
                    <View style={styles.updateButton}>
                        <Button color={'white'} style={{backgroundColor: 'rgb(38,38,38)'}} mode="contained" onPress={this.onCancelPress.bind(this)}>
                            Cancel
                        </Button>
                    </View>      
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        )
    }    
}

const mapStateToProps = state => {
    return  {
        person: state.personSelected
    }
}

export default connect(mapStateToProps, actions)(UpdatePerson);