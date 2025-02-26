import { launchImageLibrary } from 'react-native-image-picker';

export const selectImage = async () => {
  launchImageLibrary({ mediaType: 'photo' }, (response) => {
    if (!response.didCancel && !response.error) {
      uploadImage(response.assets[0].uri);
    }
  });
};
