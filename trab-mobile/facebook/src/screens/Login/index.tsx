import React from 'react';
import Header from "../../components/HeaderLogin/index";
import Input from "../../components/LoginInputs/index";
import { styles } from "./styles";
import { View } from "react-native";
import Footer from "../../components/FooterLogin/index";
export default function Login() {
  return (
    <View style={styles.container}>
      <Header />
      <Input />
      <Footer />
    </View>
  )
}
