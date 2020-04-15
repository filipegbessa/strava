import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Linking
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import api from './src/services/api';

const App: () => React$Node = () => {
  const url = 'https://www.strava.com/oauth/authorize?client_id=45698&redirect_uri=http://localhost&response_type=code&scope=activity:read_all';

  return (
    <View>
      <Text>bb</Text>
      <Button onPress={()=> openURL(url)} title="test" />
    </View>
  );
};

function openURL(url) {
  Linking.openURL(url).catch((err) => console.error('An error occurred', err));
}

function click () {
  api.get('https://www.strava.com/oauth/authorize?client_id=45698&redirect_uri=http://localhost&response_type=code&scope=activity:read_all')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

const styles = StyleSheet.create({
});

export default App;
