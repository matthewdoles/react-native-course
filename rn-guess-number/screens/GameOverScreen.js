import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.rounds}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{props.userChoice}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 40,
    marginVertical: 20,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
