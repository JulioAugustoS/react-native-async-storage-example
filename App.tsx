import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  setStorage,
  getStorage,
  clearItemStorage,
  clearStorage,
} from "./src/utils/storage";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const saveDate = () => {
    setStorage("userDataGuilherme", { name, email });
  };

  const getData = async () => {
    const data = await getStorage("userDataGuilherme");
    alert(data?.email);
  };

  const deleteData = () => {
    clearItemStorage("userData");
  };

  const deleteAllData = () => {
    clearStorage();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          width: "100%",
          height: 40,
        }}
        placeholder="Nome"
        onChangeText={(name) => setName(name)}
        value={name}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          width: "100%",
          height: 40,
          marginTop: 10,
        }}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => saveDate()}>
        <Text>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => getData()}>
        <Text>Buscar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => deleteData()}>
        <Text>Deletar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => deleteAllData()}
      >
        <Text>Limpar Base</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});
