/*eslint-disable*/
import {StyleSheet, Dimensions, View, TextInput, Text} from 'react-native';
import React from 'react';

const Width = Dimensions.get('window').width;

const Input = ({
  onChangeText,
  placeholder,
  KeyboardType,
  secureTextEntry,
  props,
}: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        // placeholderTextColor="black"
        onChangeText={onChangeText}
        keyboardType={KeyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.TextInput}
      />
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    marginLeft:-40
  },
  TextInput: {
    borderWidth:1,
    borderRadius:10,
    width: 300,
  },
});
/*eslint-disable*/
