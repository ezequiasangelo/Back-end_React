import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/Feather";
import AnimalForm from "./screenCreateAnimal";

const GetListAnimais = ({ handleEditAnimal }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://[::1]:3000/listar");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAnimal = async (id) => {
    try {
      await axios.delete(`http://[::1]:3000/delete/${id}`);
      console.log("Animal excluído com sucesso");

      // Atualizar a listagem
      fetchData();
    } catch (error) {
      console.error("Erro ao excluir animal:", error);
    }
  };

  return (
    <>
      <View style={{ backgroundColor: "#191919", paddingTop: 30 }}>
        {data.map((item) => (
          <View key={item.id} style={{ marginBottom: 10 }}>
            <Text style={{ color: "white", fontSize: 25 }}>
              Nome científico: {item.nome_cientifico}
            </Text>
            <Text style={{ color: "white", fontSize: 25 }}>ID: {item.id}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 25 }}>
                Descrição: {item.descricao}
              </Text>
              <TouchableOpacity onPress={() => handleEditAnimal(item)}>
                <Icon name="edit" size={20} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteAnimal(item.id)}>
                <Icon name="trash-2" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </>
  );
};

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [selectedAnimalId, setSelectedAnimalId] = useState(null);

  const handleEditAnimal = (animal) => {
    setSelectedAnimalId(animal.id);
    setEditMode(true);
  };

  const handleUpdateAnimal = () => {
    setEditMode(false);
    setSelectedAnimalId(null);
  };

  return (
    <View>
      {!editMode ? (
        <GetListAnimais handleEditAnimal={handleEditAnimal} />
      ) : (
        <AnimalForm
          animalId={selectedAnimalId}
          handleUpdateAnimal={handleUpdateAnimal}
        />
      )}
    </View>
  );
};

export default App;
