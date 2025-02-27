import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from '~/context/ThemeContext';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
<MaterialCommunityIcons name="less-than" size={24} color="black" />;

export default function CustomBackButton({ navigation }) {
  const { colors } = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
      <MaterialCommunityIcons name="less-than" size={24} style={{ color: colors.textColor }} />
    </TouchableOpacity>
  );
}
