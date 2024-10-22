import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
   
      screenOptions={{
        tabBarActiveTintColor: "#E1CE7A",
        headerShown: false,
        tabBarStyle:{backgroundColor:'black'}
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'movies',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'play-circle' : 'play-circle-outline'} color={"#E1CE7A"} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'shortlist',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={"#E1CE7A"} />
          ),
        }}
      />
    </Tabs>
  );
}
