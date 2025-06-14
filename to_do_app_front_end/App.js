import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import CreatTask from "./pages/creat/creat";
import {  useState } from "react";
import SeeList from "./pages/list/list.js";

export default function App() {
  const [Tabe, SetTab] = useState(0);
  const onListChange = () => {
    SetTab(0);
  };
  const onCreatChange = () => {
    SetTab(1);
  };

  return (
    <View> <View>
        <TouchableHighlight style={styles.Button_Creat} onPress={onCreatChange}>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            +
          </Text>
        </TouchableHighlight>
      </View>
      {Tabe == 0 ? (
        <SeeList></SeeList>
      ) : (
        <CreatTask
          onTaskCancel={onListChange}
          onTaskCreat={onListChange}
        ></CreatTask>
      )}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(255, 255, 255)",
  },

  Button_Creat: {
    zIndex:10,
    position: "absolute",
    backgroundColor: "#DDDDDD",
  width: "95%",
    marginTop: "190%",
    padding: "30",
    marginLeft: "2.5%",
    alignItems: "center",
  },
});
