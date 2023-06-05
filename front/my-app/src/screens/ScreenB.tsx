import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import Input from "../components/input";
import AnimalForm from "./screenCreateAnimal";

export function ScreenB() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("ScreenC");
  }

  const [nome_cientifico, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [idade_vive, setIdadeVive] = useState(0);

  const handleSave = () => {
    // Implementar lógica de salvar no backend
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <AnimalForm />
      </ScrollView>
      {/* <Input
        placeholder="Nome"
        value={nome_cientifico}
        onChangeText={(text) => setNome(text)}
      />

      <Input
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />

      <Input
        placeholder="Idade vive"
        value={idade_vive.toString()}
        onChangeText={(text) => setIdadeVive(parseInt(text, 10))}
      />

      <Button title="Salvar" onPress={handleSave} />

      <Button title="Proximo" onPress={openScreen} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});

export default ScreenB;
