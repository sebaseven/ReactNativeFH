import React from 'react'
import { Cast } from '../interfaces/creditsInterface';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props {
  actor: Cast
}
export const ActorItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {
        actor.profile_path && <Image
          source={{ uri }}
          style={{ height: 50, width: 50, borderRadius: 10 }}
        />
      }

      <View style={styles.actorInfo}>
        <Text style={{
          fontSize: 18, fontWeight: 'bold',
        }}>{actor.name}</Text>
        <Text style={{
          fontSize: 16, opacity: 0.7
        }}>{actor.character}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 10,
      height: 50,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,

      elevation: 9,
      marginLeft: 20,
      paddingRight: 15,
  },
  actorInfo: {
      marginLeft: 10,
      marginTop: 4,
  }
});