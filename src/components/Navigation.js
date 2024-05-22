import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';
import LandingPage from './LandingPage';

const Tab = createMaterialBottomTabNavigator();
const colorred = 'rgb(148,26,29)'

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="People List"
        activeColor={colorred}
        inactiveColor="#000000"
        size="20"
        barStyle={{ backgroundColor: '#cccccc' }}
      >
      <Tab.Screen name="Welcome" component={LandingPage}  options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={colorred} size={25} />
      )
    }}/>
      <Tab.Screen name="People List" component={PeopleList} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="person-outline" color={colorred} size={25} />
      )
    }}/>
      <Tab.Screen name="Add Person" component={AddPerson} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="person-add-outline" color={colorred} size={25} />
      )
    }}/>
      <Tab.Screen name="Departments" component={CompanyList} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="list-outline" color={colorred} size={25} />
      )
    }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}