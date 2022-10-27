import { RadioButton } from "react-native-paper";
import styles from "../styles/style.js";

export default function RadioBtn(props) {
  const { onPress, value } = props;

  return (
    <View style={styles.alternativas}>
        <RadioButton
          value="first"
          status={checked1 === "first" ? "checked" : "unchecked"}
          onPress={() => {onPress()}}
        />
        <Text>{value}</Text>
    </View>
  );
}
