import React from 'react';
import { View } from 'react-native';
import { Tabs } from 'expo-router';
import {StatusBar} from 'expo-status-bar';

import { AntDesign } from '@expo/vector-icons';

export default function TabLayout() {

  return (
    <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
      <StatusBar style='dark'/>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#2C2A4A',
          tabBarInactiveTintColor: '#907AD6',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
          }
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />
          }}
        />
        <Tabs.Screen
          name="read"
          options={{
            title: 'Ler',
            tabBarIcon: ({ color, size }) => <AntDesign name="book" size={size} color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}
