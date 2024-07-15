import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

export function GameCard({ juego }) {
  return (
    <View key={juego.slug} style={styles.card}>
      <Image source={{ uri: juego.image }} style={styles.image}></Image>
      <Text style={styles.title}>{juego.title}</Text>
      <Text style={styles.score}>{juego.score}</Text>
      <Text style={styles.description}>{juego.description}</Text>
    </View>
  );
}
export function AnimacionCard({ juego, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }),
    [opacity, index];

  return (
    <Animated.View style={{ opacity }}>
      <GameCard juego={juego} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 48,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
