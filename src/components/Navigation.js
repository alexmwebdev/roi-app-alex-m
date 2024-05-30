import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';
import LandingPage from './LandingPage';
import NewsPage from './NewsPage';

const Tab = createMaterialBottomTabNavigator();
const colorred = 'rgb(148,26,29)'

const styles = StyleSheet.create({
  menutext: {
    fontSize:11
  }
})

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={colorred}
        inactiveColor="#000000"
        size="20"
        barStyle={{ backgroundColor: '#cccccc' }}
      >
      <Tab.Screen name="Home" component={LandingPage}  options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={colorred} size={25} />
      ),
      tabBarLabel: <Text style={styles.menutext}>Home</Text>
    }}/>
      <Tab.Screen name="Contacts" component={PeopleList} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="person-outline" color={colorred} size={25} />
      ),
      tabBarLabel: <Text style={styles.menutext}>Contacts</Text>
    }}/>
      <Tab.Screen name="Add Contact" component={AddPerson} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="person-add-outline" color={colorred} size={25} />
      ),
      tabBarLabel: <Text style={styles.menutext}>Add Contact</Text>
    }}/>
      <Tab.Screen name="Departments" component={CompanyList} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="list-outline" color={colorred} size={25} />
      ),
      tabBarLabel: <Text style={styles.menutext}>Departments</Text>
    }}/>
    <Tab.Screen name="News" component={NewsPage} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="newspaper-outline" color={colorred} size={25} />
      ),
      tabBarLabel: <Text style={styles.menutext}>News</Text>
    }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}