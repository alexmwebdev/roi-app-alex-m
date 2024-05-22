import React, { Component } from 'react';
import { Linking, View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Button, Card, List } from 'react-native-paper';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = StyleSheet.create({
    card: {
      marginTop: 10,
      paddingBottom: 20,
      marginBottom: 20,
      borderColor: 'lightgrey',
      borderWidth: 0.5,
    },
    title1: {
        top: 10,
        left: 80,
        fontSize: 24,
        fontFamily: 'Trebuchet'
    },
    title2: {
        top: 35,
        left: 82,
        fontSize: 18,
    },
    image: {
        flex: 0,
        height: 100,
        width: 390,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        left: 325,
        color: 'red',
    },  
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    textArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        width: 260,
    },
    textIcons: {
        color: '#26a69a',
    },
    actionArea: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    editIcon: {
        color: "#26a6e4"
    },
    sections: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 10,
        width: 100,
    },
    deleteIcon: {
        color: "#e9a69a"
    },
    editDeleteArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(211,211,211, 0.3)',
        marginBottom: 10,
    },
    actionImage: {
        width: 100,
        height: 100,
    },

    personName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Trebuchet',
        marginTop:20
    },
    personCompany: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Trebuchet',
        marginTop:10,
        marginBottom:10
    },
    personMetaInfoContainer: {
        padding: 10
    },
    actionButtonContainer: {
        margin: 10
    },
    editDeleteButtonsContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    actionButtonContainerRoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
  });

class DetailView extends Component {

    onEditPress() {
       
        this.props.updatePerson();
        this.props.navigateToAddPerson()
    }

    onDeletePress() {
        
        this.props.deletePerson();

        this.props.navigateToPeopleList()
                   
    }
    constructor(props) {
        super(props);
      }
    render() {

        const {firstName, lastName, company, email, project, phone, notes} = this.props.person
        const {noneSelected, toUpdate} = this.props

        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                    <Button textColor={'#ffffff'} style={{backgroundColor: 'rgb(148,26,29)', color: '#ffffff'}} icon="arrow-left" mode="text" onPress={() => noneSelected()}>
                        Back
                    </Button> 
                    </View>
                    <View>
                        <Text style={styles.personName}>{`${firstName} ${lastName}`}</Text>
                    </View>
                    <View>
                        <Text style={styles.personCompany}>{`${company}`}</Text>
                    </View>
                    <View style={styles.personMetaInfoContainer}>
                        <Card>
                            <Card.Content>
                            <List.Item
                            style={styles.listItem}
                            title="Phone"
                            description={phone}
                            left={props => <List.Icon {...props} icon="phone" />}
                            />
                            <List.Item
                                title="E-Mail"
                                description={email}
                                left={props => <List.Icon {...props} icon="email" color={'grey'}/>}
                            />
                            <List.Item
                                title="Project"
                                description={project}
                                left={props => <List.Icon {...props} icon="clipboard-text" color={'grey'}/>}
                            />                                                
                            <List.Item
                                title="Notes"
                                description={notes}
                                left={props => <List.Icon {...props} icon="text" color={'grey'}/>}
                            />                                                
                            </Card.Content>
                            <Card.Actions style={styles.editDeleteButtonsContainer}>
                                <Button color={'grey'} onPress={this.onDeletePress.bind(this)}>Delete</Button>
                                <Button style={{backgroundColor: 'rgb(38,38,38)'}} color={'#ffffff'} onPress={this.onEditPress.bind(this)}>Edit</Button>
                            </Card.Actions>
                        </Card>
                    </View>
                    <View style={styles.actionButtonContainerRoot}>
                        <View style={styles.actionButtonContainer}>
                            <Button color={'#ffffff'} style={{backgroundColor: 'rgb(148,26,29)'}} icon="phone" mode="contained" onPress={() => Linking.openURL('tel:'+phone)}>
                            Call
                            </Button>
                        </View>
                        
                        <View style={styles.actionButtonContainer}>
                            <Button color={'#ffffff'} style={{backgroundColor: 'rgb(148,26,29)'}} icon="message-alert" mode="contained" onPress={() => Linking.openURL('sms:'+phone)}>
                                SMS
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

}

const mapStateToProps = state => {
    return { 
        person: state.personSelected,
        toUpdate: state.toUpdate,
    }
}

export default connect(mapStateToProps, actions)(DetailView);