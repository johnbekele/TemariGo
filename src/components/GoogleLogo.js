import { Image } from 'react-native';

export default function GoogleLogo() {
  return (
    <Image
      source={{
        uri: 'https://banner2.cleanpng.com/20180413/rfe/avfci721i.webp',
      }}
      style={{
        width: 50,
        height: 50,
        marginRight: 10,
        marginTop: 50,
      }}
      resizeMode="contain"
    />
  );
}
