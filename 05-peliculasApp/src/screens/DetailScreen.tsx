import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParamList } from '../navigator/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'> {

}
const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({ route, navigation }: Props) => {

  //const movie = route.params as Movie;
  const movie = route.params;

  //console.log(movie);
  const uri = `https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
        <Image
          source={{ uri }}
          style={styles.posterImage}

        />
        </View>
  
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.movie.title}</Text>
        <Text style={styles.subTitle}>{movie.movie.original_title}</Text>
      </View>
      <View style={styles.marginContainer}>
      <Icon
      name="star-outline"
      size={20}
      color="grey"
      />
      </View>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
  },
  imageContainer: {
    height: screenHeight * 0.7,
    width: '100%',
    shadowColor: "#000",
    borderRadius: 18,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7.49,
    // overflow: 'hidden',
    elevation: 12,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
 

  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  imageBorder: {
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden',
    flex: 1,
  }
});