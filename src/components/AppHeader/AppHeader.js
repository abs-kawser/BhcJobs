import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AppHeader = ({ title = "Sign In", navigateTo = "Login" }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>

           <Image
        source={{
          uri: 'https://bhcjobs.com/images/logo_day_mode.png',
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.rightSection}>
        
          <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => navigation.navigate(navigateTo)} 
        >
          <Text style={styles.signInText}>{title}</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="moon-outline" size={20} color="#4A90E2" />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 30,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  signInBtn: {
    borderWidth: 1,
    borderColor: '#4A90E2',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  signInText: {
    color: '#4A90E2',
    fontSize: 13,
    fontWeight: '600',
  },
  iconBtn: {
    padding: 6,
    borderWidth: 1,
    borderColor: '#4A90E2',
    borderRadius: 20,
  },
});