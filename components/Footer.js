import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
export const Footer = ({ index, setIndex }) => {
  return (
    <>
      <Text style={{ textAlign: "center" }}>{index}</Text>
      <View style={styles.container}>
          <Button
            icon="arrow-left-circle"
            mode="contained"
            onPress={() => setIndex(() => (index > 1 ? index - 1 : index))}>
            prev
          </Button>
          <Button
            icon="arrow-right-circle"
            onPress={() => setIndex(() => index + 1)}
            mode="contained">
            next
          </Button>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});