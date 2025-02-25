import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function AnimatedLoding() {
  return (
    <View className="-mt-6" style={{ height: '13%', aspectRatio: 1 }}>
      <LottieView
        style={{ flex: 1 }}
        source={require('../../assets/animations/LoadingAnim.json')}
        autoPlay
        loop
      />
    </View>
  );
}
