import { useEffect, useState } from "react";
import { Text, View, Image,ActivityIndicator,FlatList } from "react-native";
import { getLatestGames } from "../../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimacionCard } from "../GameCard";

export function Main() {
  const [juegos, setJuegos] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((juegos) => {
      setJuegos(juegos);
    });
  }, []);

  return (
    <View style={{paddingTop: insets.top}}>
      {
        juegos.length === 0 ? (<ActivityIndicator color= '#fff' size={"large"}/>
        ) :(
      
      <FlatList
        data={juegos}
        keyExtractor={(juego) => juego.slug}
        renderItem={({ item, index }) => (
          <AnimacionCard juego={item} index={index} />
        )}
      />
        )}
    </View>
  );
}
