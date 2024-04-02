import React, { useEffect } from 'react'; 
import { View, Button, Text } from 'react-native';

const Menu = ({ navigation }) => {
  useEffect(() => {
    console.log("menu.js");
  }, []);

  return (
    <View>
      <Text>Menu</Text>
      <Button
        title="Push Ups"
        onPress={() => navigation.navigate('RepetitionExercise')}
      />
      <Button
        title="Running"
        onPress={() => navigation.navigate('DurationExercise')}
      />
      <Button
        title="Bench Press"
        onPress={() => navigation.navigate('BenchExercise')}
      />
    </View>
  );
};

export default Menu;

