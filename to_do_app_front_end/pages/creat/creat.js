import { useEffect, useState } from "react";

import { StyleSheet, TextInput, Button, Text, View } from "react-native";

export default function CreatTask() {
  const baseurl="http://192.168.18.168:5164/";
  const [TaskName, SetTaskName] = useState("");
  const onTextChange = (val) => {
    SetTaskName(val);
  };
    const onSubmitChange = () => {
  fetch(baseurl+"CreatTask/"+TaskName).then((val)=>{console.log(val)}).then(()=>{

  }).catch(()=>{})
  };
  useEffect(() => {
    console.log(TaskName);
  }, [TaskName]);
  return (
    <View>
      <TextInput style={styles.input} onChangeText={onTextChange}></TextInput>
      <Button title="Submint" onPress={onSubmitChange}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});
