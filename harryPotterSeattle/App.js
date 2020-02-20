import React, { useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, ImageBackground} from 'react-native';
import titleBackground from './cobro-titleScreen.jpg'

const App = () => {
  const [ userName, setUserName ] = useState('')
  const [ userEmail, setUserEmail ] = useState('')

  return (
   <ImageBackground
    source={titleBackground}
    style={{
      height: '100%',
      width: '100%'
    }}
   >
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Potter Go</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username:</Text>
        <TextInput
          style={styles.inputBoxes}
          setUserName={text => setUserName(text)}
          value={userName}
        />
        <Text style={styles.inputLabel}>Email:</Text>
        <TextInput
          style={styles.inputBoxes}
          setUserEmail={text => setUserEmail(text)}
          value={userEmail}
        />
      </View>
    </View>
   </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 60,
    color: 'gold'
  },
  inputBoxes: {
    height: 30, 
    borderColor: 'gray', 
    width: 200,
    backgroundColor: 'lightgrey',
  },
  inputContainer: {
    marginTop: 250,
    height: '25%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
    opacity: .9
  },
  inputLabel: {
    fontSize: 40,
    marginTop: 10,
    color: 'gold'
  },
  titleContainer: {
    marginTop: 45,
    height: '10%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
    opacity: .9
  }
});

export default App;
