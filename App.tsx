import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View className='flex-1 bg-slate-950 justify-center'>
      <Text className='text-4xl font-bold text-white'>Language Learning App</Text>
      <StatusBar style="auto" />
    </View>
  );
}