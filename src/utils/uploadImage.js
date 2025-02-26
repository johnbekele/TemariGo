// utils/uploadImage.js
import * as ImagePicker from 'expo-image-picker';

export const pickImage = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access media library denied');
    return null;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: 'images', // Updated to use string value
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    console.log('Selected Image URI:', result.assets[0].uri);
    return result.assets[0].uri;
  }
  console.log('Image selection canceled');
  return null;
};

export const uploadImage = async () => {
  try {
    const uri = await pickImage();
    if (!uri) return null;

    const response = await fetch(uri);
    const blob = await response.blob();
    console.log('Image blob created:', blob.size);
    return { blob, uri };
  } catch (error) {
    console.error('Upload prep error:', error.message);
    throw error;
  }
};
