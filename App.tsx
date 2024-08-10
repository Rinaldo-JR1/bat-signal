import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home/Home';
import { useState } from 'react';
import { BatForm } from './src/screens/Bat-Form/Bat-Form';

export default function App() {
  const [isForm, setIsForm] = useState<boolean>(false);
  const handleForm = () => {
    if (isForm) {
      return <BatForm setIsForm={setIsForm} />
    } else {
      return <Home setIsForm={setIsForm} />
    }
  }
  return (
    <>
      <StatusBar style="auto" />
      {handleForm()}
    </>
  );
}


