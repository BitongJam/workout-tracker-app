import {
  Avatar,
  AvatarFallbackText,
  AvatarImage
} from '@/components/ui/avatar';
import { Divider } from '@/components/ui/divider';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Settings } from 'lucide-react-native';


export default function ProfileScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <VStack space="xs" reversed={false}>

        <View className='mt-10'>
          <Avatar className='w-25 h-25 self-center'>
            <AvatarFallbackText>Jane Doe is test</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
              }}
            />
          </Avatar>
          <Text bold={true} className='self-center' size='lg'>
            James Michael J. Ortiz
          </Text>
          <Text className='self-center' size='md' italic={true} >
            Profile
          </Text>
        </View>

        <View className='mt-10 px-7'>
          <Divider className="" />
          <View className='flex-row items-center gap-2'>
            <Text>Acccount Info</Text>
            <Icon as={Settings} size="lg" />
          </View>
        </View>
      </VStack>
    </SafeAreaView>

  )
}