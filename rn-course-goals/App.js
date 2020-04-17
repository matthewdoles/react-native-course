import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View>
        <TextInput
          placeholder='Course Goal'
          style={{ borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, marginBottom: 20 }}
        />
        <Button title='ADD' />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
