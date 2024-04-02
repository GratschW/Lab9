import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const DurationExercise = ({ navigation }) => {
  const [exerciseName] = useState('Running');
  const [timerRunning, setTimerRunning] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let intervalId;

    if (timerRunning) {
      intervalId = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setDuration(0);
  };

  return (
    <View>
      <Text>{exerciseName}</Text>
      <Text>Duration: {duration} seconds</Text>
      <Button title="Start Timer" onPress={startTimer} />
      <Button title="Reset Timer" onPress={resetTimer} />
      <Button title="Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
};

export default DurationExercise;
