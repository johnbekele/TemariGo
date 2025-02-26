import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { getAuth } from 'firebase/auth';

export default function ProfileButton() {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={{ uri: user?.photoURL }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </TouchableOpacity>
    </View>
  );
}
