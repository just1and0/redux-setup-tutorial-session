import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  CHANGE_NAME,
} from './../redux/actions/counter';

export default function Page1() {
  const dispatch = useDispatch();
  const {name, counter} = useSelector(state => state.counter);
  const increment = () => {
    dispatch(INCREMENT_COUNTER());
  };
  const decrment = () => {
    dispatch(DECREMENT_COUNTER());
  };

  const changename = () => {
    dispatch(CHANGE_NAME('godswil'));
  };
  return (
    <SafeAreaView>
      <View style={[{}]}>
        <Text> {name} </Text>
        <Text>current count: {counter}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity onPress={() => increment()}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => decrment()}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changename()}>
          <Text>change name</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
