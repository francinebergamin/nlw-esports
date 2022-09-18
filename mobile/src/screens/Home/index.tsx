import logoImg from '../../assets/logo-nlw-esports.png';
import {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'; 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Image, FlatList } from 'react-native';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { Background } from '../../components/Background';

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerUrl}: GameCardProps){
    navigation.navigate('game', {id, title, bannerUrl});
  }

  useEffect(() => {
    fetch('http://192.168.100.58:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, []);
    

  return (
    <Background>

    <SafeAreaView  style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      ></Image>

      <Heading
        title="Encontre seu duo!"
        subtitle='Selecione o game que deseja jogar...'>
      </Heading>

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard
            data={item}
            onPress={() => handleOpenGame(item)}>
            </GameCard>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}></FlatList>
    </SafeAreaView>
    </Background>
  );
}