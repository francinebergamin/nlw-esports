import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { GameParams } from "../../@types/navigation";

import { Image, TouchableOpacity, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Entypo } from "@expo/vector-icons";
import logoImg from "../../assets/logo-nlw-esports.png";

import { THEME } from "../../theme";
import { styles } from "./styles";

export function Game() {
  const navigation = useNavigation();
  const Route = useRoute();
  const game =
    /* antes tava route.params (dando  erro) */
    Route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>

      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            ></Entypo>
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo}></Image>

          <View style={styles.right} />
        </View>

        <Image
        source={{uri: game.bannerUrl}}
        style={styles.cover}
        resizeMode="cover" >
        </Image>

        <Heading
          title="{game.title}"
          subtitle="Conecte-se e comece a jogar!"
        ></Heading>

      </SafeAreaView>

    </Background>
  );
}
