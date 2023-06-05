import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GetListAnimais from ".";

export function ScreenA() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("ScreenB");
  }

  return (
    <>
      <Text
        style={{
          color: "white",
          fontSize: "40px",
          textAlign: "center",
          backgroundColor: "#191919",
          marginTop: 80,
        }}
      >
        Listando os Animais
      </Text>

      <GetListAnimais />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#191919",
        }}
      >
        <Button
          title="Cadastrar e Editar"
          color={"white"}
          onPress={openScreen}
        />
      </View>
    </>
  );
}
