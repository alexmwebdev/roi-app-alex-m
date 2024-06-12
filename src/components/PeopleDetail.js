import React, { Component } from 'react';
import DetailView from './DetailView';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
      fontFamily: "Trebuchet"
    }
  });
class PeopleDetail extends Component {

    render() {
        return <DetailView style={styles.text} navigateToPeopleList={this.props.navigateToPeopleList}
        navigateToAddPerson={this.props.navigateToAddPerson}/>
    }
}

export default  PeopleDetail;