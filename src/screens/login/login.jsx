import { useState } from "react";
import { View, TextInput, ScrollView } from "react-native";
import { BButton } from "../../components/bbutton";
/****
 *  states will be always the first lines in a
 * component
 *
 */

function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLoginPressed = () => {
    if (email === undefined || email === "") {
      alert("😡 please enter the email");
      return;
    }

    if (password === undefined || password === "") {
      alert("😡🏏 please enter the password");
      return;
    }

    if (password.length <= 6) {
      alert("💚 you have to enter atleast 7 digits");
      return;
    }

    console.log(email, password);
  };

  return (
    <ScrollView>
      <View
        style={{
          padding: 10,
          justifyContent: "center",
          height: "100%",
        }}
      >
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
          placeholder={"email"}
          // onChangeText={(text) => setEmail(text)}
          onChangeText={setEmail}
        />
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
          placeholder={"password"}
          secureTextEntry={true}
          // onChangeText={(text) => setPassword(text)}
          onChangeText={setPassword}
        />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <BButton text={"Login"} onButtonPress={onLoginPressed} />
          <BButton text={"Login1 "} onButtonPress={onLoginPressed} />
          <BButton text={"Login2"} onButtonPress={onLoginPressed} />
          <BButton text={"Login3"} onButtonPress={onLoginPressed} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default Login;
