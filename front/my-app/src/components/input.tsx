import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

function Input({ placeholder, value, onChangeText }: InputProps) {
    return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#adb5bd',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Input;