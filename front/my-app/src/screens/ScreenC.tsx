import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button2 from "../components/button2";
import Input from "../components/input";

export function ScreenC() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("ScreenC");
  }

  const [_cientifico, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [idade_vive, setIdadeVive] = useState(0);

  const handleUpdadte = () => {
    // Implementar lógica de Editar no backend
  };
  const handleDelete = () => {
    // Implementar lógica de Deletar no backend
  };
  const handleBuscar = () => {
    // Implementar lógica de Deletar no backend
  };

  return (
    <View style={styles.container}>
      <Text>Digite nome ou Id do animal</Text>
      <Text></Text>
      <Input
        placeholder="Buscar"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />

      <Text></Text>
      <Button title="Buscar" onPress={handleBuscar} />

      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>Animal Cadastrado</Text>

      <Text></Text>
      <Input
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

      <Button title="Editar" onPress={handleUpdadte} />
      <Text></Text>

      <Button2 title="Deletar" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
});

export default ScreenC;
