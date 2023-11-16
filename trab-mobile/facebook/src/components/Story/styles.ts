import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    height: 200,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
},
card: {
    width: 16,
    height: 100,
    position: 'relative',
    marginRight: 8,
  },
  cardStory: {
    width: "100%",
    height: 170,
  },
  image: {
    width: 100,
    height: 200,
    resizeMode: 'contain',
  },
  adicionarStory: {
    width: 100,
    height: 200,
  },
  fundo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    opacity: 0.9,
    height: 80,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
});
