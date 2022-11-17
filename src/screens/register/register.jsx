import { useState } from "react";
import { View, Text, Button } from "react-native";

// a componeet basically lives on states and it gets some props from
// its parents or callers
// prop ( properties )

/** 
    you can say its borrows properties from other componenst 
    and you can not change them!
 */
/**
 * states are the frist class citizesn of a componetnt!

 *
 *  you make a stqate using useStae hook
 *   const then []
 *    in bracket first is the state name and the secondi state changer!j
 * // by deafult a state is undefined
 *    buyt you can give it a default value~! ins useState possesion brackets
 */

/**
 *
 * Listners (sunna wala)
 *  (functions that wait for its calling and then do something)
 *
 */

function Register() {
  const [title, setTitle] = useState("Default🐊 title");
  const [isButtonRed, setIsButtnoRed] = useState(false);

  const onButtonPressed = () => {
    setTitle("🐎 🐄");
    if (title === "🐎 🐄") {
      setTitle("�");
    }
    setIsButtnoRed(true);
  };

  return (
    <View>
      <Text style={{ fontSize: 50 }}>{title}</Text>
      <Button
        title={"hello world"}
        onPress={onButtonPressed}
        color={isButtonRed ? "red" : "blue"}
      />
    </View>
  );
}

export default Register;
