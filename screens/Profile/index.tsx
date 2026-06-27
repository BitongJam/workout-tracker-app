import { Image } from '@/components/ui/image';
import { VStack } from '@/components/ui/vstack';
import { Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <VStack space="xs" reversed={false}>
     <Image className='self-center mt-5 mb-5'
      size="xl"
      source={{
        uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      }}
      alt="image"
    />

    <Text className='self-center font-bold text-xl '>
        Full Name
    </Text>

    <Text>
        Sub
    </Text>
      </VStack>
  )
}