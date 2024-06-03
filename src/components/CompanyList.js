import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/EvilIcons';
import CompanyItem from './CompanyItem';

const styles = StyleSheet.create({
    image: {
        flex:1
      }
});

class CompanyList extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'archive'} size={50} color={tintColor} />
        )
    }
    render() {
        return (
            <ImageBackground source={require('../images/roi-background.png')} resizeMode="cover" style={styles.image}>
                <View>
                    <FlatList
                        data={this.props.companies}
                        renderItem={({item}) => <CompanyItem companies={item} />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => {
    const people = state.people;

    const companies = 
        _.chain(people)
            .groupBy('company')
            .map((value, key) => {
                return {
                    company: key,
                    names: value
                }
            })
            .value();

    return {
        companies,
    }
}
export default connect(mapStateToProps)(CompanyList);