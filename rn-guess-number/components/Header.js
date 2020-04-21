import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerIOS: {
    backgroundColor: Colors.primary,
  },
  title: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
  },
});

export default Header;
