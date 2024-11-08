import React, { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, TextInput, StyleSheet, Button } from 'react-native';
import { ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Index(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    try{
      await auth().createUserWithEmailAndPassword(email, password);
      alert('User account created & signed in!');
    } catch (e: any) {
      const err = e as Error;
      alert('Registration failed! ' + err.message);
    }
    setLoading(false);
  };


  
  return (
    <SafeAreaView className="flex-1 justify-center items-center ">
      <KeyboardAvoidingView behavior='padding' className='w-full px-4 justify-center items-center'>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='Email'
          placeholderTextColor='#A9A9A9'
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder='Password'
          placeholderTextColor='#A9A9A9'
          secureTextEntry
          style={styles.input}
        />

        {loading ? (
          <ActivityIndicator size={'small'}  style={{margin: 28 }}color='#0000ff' />
        ) : (  <>    
        <Button onPress={signUp} title='Sign Up' />
        </>  
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  keyboardAvoidingView: {
    width: '100%',
    paddingHorizontal: 16,
  },
  input: {
    borderColor: '#D1D5DB',
    borderWidth: 1,
    height: 60,
    width: '80%',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'white',
  },
});

export default Index;