import { Divisor } from "../Divisor";
import { styles } from "./styles"
import { View, FlatList, ImageBackground, Text } from 'react-native';

export default function Story() {
  const DATA = [
    {
      id: "1",
      image: require('../../assets/foto-perfil.jpg'),
    },
    {
      id: "2",
      image: require('../../assets/story4.jpg'),
    },
    {
      id: "3",
      image: require('../../assets/story2.jpg'),
    },
    {
      id: "4",
      image: require('../../assets/story3.jpg'),
    },
    {
      id: "5",
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
<Divisor/>
</>
  );
}
