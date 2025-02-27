import { View, Text, StyleSheet, Image } from 'react-native';
import { ThemeContext } from '~/context/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Svg, { Path } from 'react-native-svg';
import ChalkboardIcons from './ChalkboardIcons';
import CustomeText from './CustomeText';
export default function ImageHeader() {
  const { colors } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.backgroundColor, shadowColor: colors.borderColor },
      ]}>
      <View style={styles.imageContainer}>
        <View className=" items-center justify-center">
          <View className="rotate-80 skew-x-6 p-2">
            <Feather name="book" size={37} color={colors.imageColor} />
          </View>
        </View>
        <View className=" mt-10 items-center justify-center">
          <View className="rotate-12 p-2">
            <FontAwesome5 name="photo-video" size={30} color={colors.imageColor} />
          </View>
        </View>
      </View>
      <View className="items-center justify-center">
        <View className="rotate-12 p-2">
          <AntDesign name="idcard" size={40} color={colors.imageColor} />
        </View>
      </View>
      <CustomeText className="text-center font-serif text-3xl font-bold">
        Want to save something {'\n'}for later ?{' '}
      </CustomeText>

      <CustomeText
        containerClass="pt-6"
        className="text-sm/6font-semibold text-center font-sans text-lg">
        Your Wishlist will go here .
      </CustomeText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  Icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
