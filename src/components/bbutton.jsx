import { TouchableOpacity, Text } from "react-native";

/**
 * Touch able opacity
 * Pressable
 */

function BButton({
  bgColor = "red",
  text = "no text supplied",
  textColor = "white",
  textSize = 12,
  width = 200,
  height = 50,
  onButtonPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        width: width,
        height: height,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColor,
      }}
      onPress={onButtonPress}
    >
      <Text style={{ color: textColor, fontSize: textSize }}>{text}</Text>
    </TouchableOpacity>
  );
}

export { BButton };
