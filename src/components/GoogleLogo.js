import { Image } from 'react-native';

export default function GoogleLogo() {
  return (
    <Image
      source={require('~/assets/img/googleicon.png')}
      style={{
        width: 30,
        height: 30,
        marginRight: 10,
      }}
      resizeMode="contain"
    />
  );
}
