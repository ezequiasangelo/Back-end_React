import React, { useState, useEffect } from "react";
import { View, TextInput, Switch, Button, ScrollView } from "react-native";
import axios from "axios";

interface IProps {
  animalId: Number;
}

const AnimalForm = ({ animalId }: IProps) => {
  const [nomeCientifico, setNomeCientifico] = useState("");
  const [descricao, setDescricao] = useState("");
  const [domestico, setDomestico] = useState(false);
  const [idadeVive, setIdadeVive] = useState(null);

  useEffect(() => {
    if (animalId) {
      fetchAnimalData();
    }
  }, [animalId]);

  const fetchAnimalData = async () => {
    try {
      const response = await axios.get(`http://[::1]:3000/animal/${animalId}`);
      const animalData = response.data;
      setNomeCientifico(animalData.nome_cientifico);
      setDescricao(animalData.descricao);
      setDomestico(animalData.domestico);
      setIdadeVive(animalData.idade_vive);
    } catch (error) {
      console.error("Erro ao obter dados do animal:", error);
    }
  };

  const handleCreateAnimal = async () => {
    try {
      const animalData = {
        nome_cientifico: nomeCientifico,
        descricao: descricao,
        domestico: domestico,
        idade_vive: idadeVive,
      };

      const response = await axios.post(
        "http://[::1]:3000/adicionar",
        animalData
      );

      console.log("Animal criado:", response.data);

      setNomeCientifico("");
      setDescricao("");
      setDomestico(false);
      setIdadeVive(null);

      handleUpdateAnimal();
      // server para atualizar a listagem após a criação do animal
    } catch (error) {
      console.error("Erro ao criar animal:", error);
    }
  };

  const handleUpdateAnimal = async () => {
    try {
      const animalData = {
        nome_cientifico: nomeCientifico,
        descricao: descricao,
        domestico: domestico,
        idade_vive: idadeVive,
      };

      const response = await axios.put(
        `http://[::1]:3000/editar/${animalId}`,
        animalData
      );

      console.log("Animal atualizado:", response.data);

      handleUpdateAnimal(); // Atualizar a listagem após a edição do animal
    } catch (error) {
      console.error("Erro ao atualizar animal:", error);
    }
  };

  return (
    <ScrollView>
      <View>
        <TextInput
          placeholder="Nome Científico"
          value={nomeCientifico}
          onChangeText={(text) => setNomeCientifico(text)}
        />
        <TextInput
          placeholder="Descrição"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
        />
        <Switch
          value={domestico}
          onValueChange={(value) => setDomestico(value)}
        />
        <TextInput
          placeholder="Idade que vive"
          value={idadeVive ? idadeVive.toString() : ""}
          onChangeText={(text) => setIdadeVive(parseInt(text))}
        />
        <Button
          title={animalId ? "Atualizar Animal" : "Criar Animal"}
          onPress={animalId ? handleUpdateAnimal : handleCreateAnimal}
        />
      </View>
    </ScrollView>
  );
};

export default AnimalForm;
