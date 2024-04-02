import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const RepetitionExercise = ({ navigation }) => {
  const [exerciseName] = useState('Push-ups');
  const [repetitions, setRepetitions] = useState(0);

  const increaseRepetitions = () => {
    setRepetitions(repetitions + 1);
  };

  const resetRepetitions = () => {
    setRepetitions(0);
  };

  return (
    <View>
      <Text>{exerciseName}</Text>
      <Text>Repetitions: {repetitions}</Text>
      <Button title="Add Repetition" onPress={increaseRepetitions} />
      <Button title="Reset" onPress={resetRepetitions} />
      <Button title="Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
};

export default RepetitionExercise;








