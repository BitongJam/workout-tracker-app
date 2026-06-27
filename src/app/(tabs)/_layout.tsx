import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Tabs } from 'expo-router';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name="index" options={{title:"Home",tabBarIcon:({color,size})=>(
            <Entypo name="home" size={size} color={color} />
        )}}/>
        <Tabs.Screen name="profile" options={{title:"Profile",tabBarIcon: ({color,size})=>(
            <Fontisto name="person" size={size} color={color} />
        )}}/>
    </Tabs>

  )
}