import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputhandler(enteredText) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalhandler() {
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          tyle={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputhandler}
        />
        <Button title="Submit" onPress={addGoalhandler} />
      </View>
      <View style={styles.goalContainer}>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.goalItem} >
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 5,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
