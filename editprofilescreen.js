import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const InputField = ({ value, handleInput, placeholder }) => {
  return (
    <TextInput
      value={value}
      onChangeText={handleInput}
      placeholder={placeholder}
    />
  );
};

const EditProfileScreen = () => {
  const [name, setName] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  return (
    <View>
      <Text>Edit Profile Screen</Text>
      <InputField
        value={name}
        handleInput={handleNameChange}
        placeholder="Enter your name"
      />
    </View>
  );
};

export default EditProfileScreen;
