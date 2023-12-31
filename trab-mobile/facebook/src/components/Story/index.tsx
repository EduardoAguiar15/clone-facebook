import { Divisor } from "../Divisor";
import { styles } from "./styles"
import { View, FlatList, ImageBackground, Text } from 'react-native';

export default function Story() {
  const DATA = [
    {
      id: "1",
      name: "Luiz Felipe",
      image: require('../../assets/foto-perfil.jpg'),
    },
    {
      id: "2",
      name: "Maria Clara",
      image: require('../../assets/story(1).jpg'),
    },
    {
      id: "3",
      name: "Isabela Lima",
      image: require('../../assets/story(4).jpg'),
    },
    {
      id: "4",
      name: "Ana Julia",
      image: require('../../assets/story3.jpg'),
    },
    {
      id: "5",
      name: "João Pedro",
      image: require('../../assets/story4.jpg'),
    },
  ];

  const renderItem = ({ item, index }) => (
    <View style={styles.container}>
      <ImageBackground source={item.image} style={[styles.image, index === 0 && styles.adicionarStory]}>
        {index === 0 && (
          <View style={styles.fundo}>
            <Text style={styles.text}>Criar Story</Text>
          </View>
        )}
        {index !== 0 && (
          <View style={styles.overlay}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Divisor />
    </>
  );
}
