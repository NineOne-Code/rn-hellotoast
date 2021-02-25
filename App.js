import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  useWindowDimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  let window = useWindowDimensions();
  let heightWindow = window.height;
  let widthWindow = window.width;

  if (heightWindow > widthWindow) {
    return <PotraidScreen />;
  } else {
    return <LandscapeScreen />;
  }
};

const PotraidScreen = () => {
  const showHelloToast = () => {
    ToastAndroid.show('Hallo Toast!!!', ToastAndroid.SHORT);
  };

  const [counter, setCounter] = useState(0);
  const incrementCount = () => {
    setCounter(counter + 1);
  };

  return (
    <View>
      <View
        style={{
          justifyContent: 'space-around',
          backgroundColor: '#546',
          height: 60,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Hallo Toast
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          margin: 10,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#3f64d1',
            padding: 5,
          }}
          onPress={() => showHelloToast()}>
          <Text style={{color: '#fff', fontSize: 30}}>Toast</Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#ee2',
            alignItems: 'center',
            height: 420,
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 300, color: '#546'}}>{counter}</Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#3f64d1',
            padding: 5,
          }}
          onPress={incrementCount}>
          <Text style={{color: '#fff', fontSize: 30}}>Count</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LandscapeScreen = () => {
  const showHelloToast = () => {
    ToastAndroid.show('Hallo Toast!!!', ToastAndroid.SHORT);
  };

  const [counter, setCounter] = useState(0);
  const incrementCount = () => {
    setCounter(counter + 1);
  };

  return (
    <View>
      <View
        style={{
          justifyContent: 'space-around',
          backgroundColor: '#546',
          height: 60,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Hallo Toast
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          margin: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#3f64d1',
              padding: 5,
              width: 300,
            }}
            onPress={() => showHelloToast()}>
            <Text style={{color: '#fff', fontSize: 30}}>Toast</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#3f64d1',
              padding: 5,
              width: 300,
            }}
            onPress={incrementCount}>
            <Text style={{color: '#fff', fontSize: 30}}>Count</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#ee2',
            alignItems: 'center',
            height: 190,
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 140, color: '#546'}}>{counter}</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
