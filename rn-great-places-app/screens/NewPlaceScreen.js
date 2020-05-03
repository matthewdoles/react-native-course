import React, { useState, useCallback } from 'react';
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';

import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';
import Colors from '../constants/Colors';
import * as placeActions from '../store/places-actions';

const NewPlaceScreen = (props) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [location, setLocation] = useState();
  const dispatch = useDispatch();

  const titleChangeHandler = (text) => setTitle(text);

  const savePlaceHandler = () => {
    dispatch(placeActions.addPlace(title, image, location));
    props.navigation.goBack();
  };

  const imageTakenHandler = (imagePath) => setImage(imagePath);

  const locationPickedHandler = useCallback((location) => {
    setLocation(location);
  }, []);

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={title}
        />
        <ImagePicker onImageTaken={imageTakenHandler} />
        <LocationPicker
          navigation={props.navigation}
          onLocationPicked={locationPickedHandler}
        />
        <Button
          title='Save Place'
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: 'New Place',
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
