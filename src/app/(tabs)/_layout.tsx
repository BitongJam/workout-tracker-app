import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    // <Tabs screenOptions={{headerShown:false}}>
    //     <Tabs.Screen name="index" options={{title:"Home",tabBarIcon:({color,size})=>(
    //         <Entypo name="home" size={size} color={color} />
    //     )}}/>
    //     <Tabs.Screen name="profile" options={{title:"Profile",tabBarIcon: ({color,size})=>(
    //         <Fontisto name="person" size={size} color={color} />
    //     )}}/>
    // </Tabs>
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Icon sf="person" md="person_2" />
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}