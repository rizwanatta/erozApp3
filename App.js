import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "./src/screens/register/register";
import Home from "./src/screens/home/home";
// use the stack function inside a constant to be used as
// a tag later on in side the container

function App() {
  return <Home />;
}
export default App;
