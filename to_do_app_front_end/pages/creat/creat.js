import { useState } from "react";

import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  View,
} from "react-native";

export default function CreatTask({ onTaskCancel,onTaskCreat }) {
  const baseurl ="https://ha.harrycheemaserver.uk/";
  const [TaskName, SetTaskName] = useState("");

  const onTextChange = (val) => {
    SetTaskName(val);
  };

  const onSubmitChange = async () => {
const resp = await fetch(baseurl+'Creat_task/'+TaskName, {
    method:"GET"
});

            console.log(resp.body);

      onTaskCreat();
  };
  const onCancelChange = () => {
onTaskCancel();
};

  return (
    <View style={styles.contaner}>
      <Text style={styles.Text}>Creat Task:</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={onTextChange}
      ></TextInput>
      <TouchableHighlight style={styles.Button_submit} onPress={onSubmitChange}>
        <Text>Submit</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.Button_cancel} onPress={onCancelChange}>
        <Text>X</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    width: 200,
    marginBottom: "100",
  },
  Button_submit: {
    alignItems: "baseline",
    backgroundColor: "#DDDDDD",
    padding: 15,
    marginTop: "30%",
    position: "absolute",
  },
  Button_cancel: {
    alignItems: "baseline",
    backgroundColor: "#DDDDDD",
    padding: 15,
    marginTop: "-60%",
    marginLeft: "-85%",
    position: "absolute",
  },
  Text: {
    color: "rgb(131, 131, 131)",
    fontSize: 40,
  },
  contaner: {
    marginTop: "70%",
    alignItems: "center",
       width:"100%",
     height:"100%",
  },
});
