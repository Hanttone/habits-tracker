import React, {useState} from 'react';
import {
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

import Header from '../Components/Header';
import Button from '../Components/Button';

export default function CreateHabit() {
  const [input, onInputChange] = useState();
  const [habits, setHabits] = useState([]);

  function createNewHabit() {
    setHabits([...habits, input]);
  }

  function removeHabit(index) {
    if (index === 0) {
      setHabits(habits.slice(1));
    } else {
      setHabits([...habits.slice(0, index), ...habits.slice(index + 1)]);
    }
  }

  let screenWidth = Dimensions.get('window').width;
  return (
    <HabitsWrapper>
      <ImageBackground
        style={{
          height: 120,
          width: screenWidth,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={{
          uri:
            'https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80',
        }}>
        <Filter />
        <Header text="Create Habit" mt="5%" color="#6E473F" />
      </ImageBackground>
      <ContentWrapper>
        <ScrollView style={{flex: 1}}>
          <KeyboardAvoidingView
            style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              position: 'relative',
            }}>
            {habits.map((habit, index) => (
              <HabitWrapper key={index}>
                <Habit>{habit}</Habit>
                <Icon
                  name="form"
                  color="black"
                  size={40}
                  style={{marginRight: '5%'}}
                />
                <Pressable onPress={() => removeHabit(index)}>
                  <Icon name="delete" color="black" size={40} />
                </Pressable>
              </HabitWrapper>
            ))}
            <LoginInput
              value={input}
              placeholder="Add new habit"
              onChangeText={(text) => onInputChange(text)}
              onSubmitEditing={createNewHabit}
            />
            <Button
              text="Submit daily habits"
              page="New Habit"
              margin="0%"
              width="340px"
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </ContentWrapper>
    </HabitsWrapper>
  );
}

const HabitsWrapper = styled.View`
  height: 100%;
  width: 100%;
  background-color: #aa7a78;
`;

const Filter = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #f2e4e8;
  opacity: 0.7;
`;

const ContentWrapper = styled.View`
  width: 100%;
  height: 83%;
  position: relative;

  display: flex;
  align-items: center;

  background-color: white;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  elevation: 5;
`;

const HabitWrapper = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: 2%;
`;

const Habit = styled.Text`
  font-size: 25px;
  font-family: Helvetica;
  width: 50%;
`;

const LoginInput = styled.TextInput`
  height: 45px;
  width: 90%;

  border-radius: 18px;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: white;
  text-align: center;
  font-size: 25px;
  font-family: Helvetica;
  elevation: 5;
`;
