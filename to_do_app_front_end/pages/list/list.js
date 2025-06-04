import { useEffect, useState } from "react";

import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  View,
  FlatList,
} from "react-native";
import { deviceType, DeviceType } from "expo-device";

export default function SeeList() {
  const baseurl = "http://100.65.198.207/";
  const [List, SetList] = useState();
  const renderItem = ({ item }) => (
    <View style={styles.box}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
  useEffect(() => {
    fetch(baseurl + "List_task", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => {
        var arry = JSON.parse(result).List;
        console.log(arry);
        SetList(arry);
      })
      .catch((error) => console.error(JSON.parse(error)));
  }, []);

  return (
    <View style={styles.contaner}>
      <FlatList
        data={List} 
        style={styles.list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        
      />
    </View>
  );
}
const styles = StyleSheet.create({
  contaner: {
    marginTop: "10%",
    alignItems: "center",
    borderStyle:"solid",
    borderColor:"rgb(0, 0, 0)",
borderWidth:1,

    marginLeft:"2.5%",
    width: "95%",
    height:"87%",
  },
  list: {
    width: "100%",
    height:"100%",
    overflow:"scroll",
    marginLeft:"5%"
  },
  box: {
    backgroundColor: "rgb(205, 202, 202)",
    display: "flex",
    width: "95%",
    alignItems: "flex-start",
    padding: "10",
    marginBottom: 5,
    marginTop: 5,
    borderRadius: "20",
  },
});
