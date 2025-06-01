import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import CreatTask from "./pages/creat/creat";
import { useEffect, useState } from "react";
import SeeList from "./pages/list/list";

export default function App() {
  const [Tabe, SetTab] = useState(0);
  const onListChange = () => {
    SetTab(0);
  };
  const onCreatChange = () => {
    SetTab(1);
  };

  return (
    <View>
      <View style={{ display: Tabe == 1 ? "" : "none" }}>
        <CreatTask  onTaskCancel={onListChange} onTaskCreat={onListChange} ></CreatTask>
      </View>
      <View style={{display:Tabe==1?"":"none"}}>
        <SeeList></SeeList>
      </View>
      <View style={styles.container}>
        <TouchableHighlight style={styles.Button_List} onPress={onListChange}>
          <Text>List</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.Button_Creat} onPress={onCreatChange}>
          <Text>Creat</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  Button_List: {
    alignItems: "baseline",
    backgroundColor: "#DDDDDD",
    padding: 15,
    position: "absolute",
      width:"50%",
    marginTop: "80%",
    marginLeft: "-1%",
    alignItems: "center",
  },
  Button_Creat: {
    alignItems: "baseline",
    backgroundColor: "#DDDDDD",
    padding: 15,
    width:"50%",
    marginTop: "80%",
    marginLeft: "51%",
    position: "absolute",
    alignItems: "center",
  },
});
