import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Bench = ({ navigation }) => {
  const [exerciseName] = useState('Bench Press');
  const [repetitions, setRepetitions] = useState(0);
  const [weight, setWeight] = useState('0');

  const increaseRepetitions = () => {
    setRepetitions(repetitions + 1);
  };

  const resetRepetitions = () => {
    setRepetitions(0);
  };

  const handleWeightChange = (text) => {
    setWeight(text);
  };

  return (
    <View>
      <Text>{exerciseName}</Text>
      <Text>Repetitions: {repetitions}</Text>
      <Text>Weight: </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        keyboardType="numeric"
        value={weight}
        onChangeText={handleWeightChange}
      />
      <Button title="Add Repetition" onPress={increaseRepetitions} />
      <Button title="Reset" onPress={resetRepetitions} />
      <Button title="Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
};

export default Bench;
