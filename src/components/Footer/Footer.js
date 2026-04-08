import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // or use MaterialCommunityIcons

const Footer = () => {
  const socialLinks = [
    { name: 'facebook', url: 'https://facebook.com' },
    { name: 'instagram', url: 'https://instagram.com' },
    { name: 'youtube', url: 'https://youtube.com' },
    { name: 'linkedin', url: 'https://linkedin.com' },
    { name: 'x-twitter', url: 'https://x.com' },
  ];

  return (
    <View style={styles.container}>
      {/* Follow Us Section */}
      <Text style={styles.followUs}>Follow Us</Text>

      {/* Social Icons */}
      <View style={styles.socialContainer}>
        {socialLinks.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Linking.openURL(item.url)}
            style={styles.iconButton}>
            <Icon name={item.name} size={24} color="#FFFFFF" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Company</Text>
          <Icon name="chevron-down" size={18} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Legal</Text>
          <Icon name="chevron-down" size={18} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Resources</Text>
          <Icon name="chevron-down" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Copyright */}
      <Text style={styles.copyright}>
        Copyright © 2025 Bhc Jobs Ltd - All Rights Reserved.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2563EB', // Exact blue from image
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    marginTop:"10"
  },
  followUs: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  socialContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  iconButton: {
    marginHorizontal: 12,
  },
  menuContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.3)',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  copyright: {
    color: '#FFFFFF',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 25,
    opacity: 0.9,
  },
});

export default Footer;