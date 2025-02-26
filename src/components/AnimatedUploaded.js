import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function AnimatedUploaded() {
  return (
    <View className="flex-row items-center" style={{ height: 80, alignItems: 'center' }}>
      <Text className="mr-2 text-lg font-semibold">Uploaded</Text>
      <LottieView
        source={require('../../assets/animations/UploadedAnim.json')}
        autoPlay
        loop={false} // Play once when uploaded
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
}
