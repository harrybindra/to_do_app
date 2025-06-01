import { useEffect, useState } from "react";

import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  View,
} from "react-native";
import { fetch } from "expo/fetch";

export default function SeeList() {
  const baseurl = "http://192.168.18.132/";
  const [List, SetList] = useState("");
  useEffect(async () => {
    fetch(baseurl + "List_task", {
      method: "GET",
    })
      .then((val) => {
        console.log(val);
      })
      .then(() => {})
      .catch(() => {});
  }, []);

  return <View style={styles.contaner}></View>;
}

const styles = StyleSheet.create({});
