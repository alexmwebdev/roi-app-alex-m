import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/EvilIcons';
import CompanyItem from './CompanyItem';

const styles = StyleSheet.create({
    image: {
        flex:1
      },
      menutext: {

      }
});

class CompanyList extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'archive'} size={20} color={tintColor} />
        ),
        tabBarLabel: <Text style={styles.menutext}>News</Text>
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