import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParamList } from '../navigator/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetalis } from '../hooks/useMovieDetalis';
import { MovieDetails } from '../components/MovieDetails';
interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'> {

}
const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({ route, navigation }: Props) => {

  //const movie = route.params as Movie;
  const movie = route.params;

  const { isLoading, cast, movieFull } = useMovieDetalis(movie.id);

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

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
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
      </View>

      {/* <Icon
          name="star-outline"
          size={20}
          color="grey"
        /> */}
      {
        isLoading ?
          <ActivityIndicator size={35} color="grey" style={{
            marginTop: 10
          }} /> :
          <MovieDetails movieFull={movieFull!} cast={cast} />
      }
      {/* Boton para cerrar */}
      <TouchableOpacity style={styles.backButton}>
        <Icon
          onPress={() => navigation.goBack()}
          name='arrow-back-outline'
          color={'white'}
          size={60}

        />
      </TouchableOpacity>

    </ScrollView>

  )
}
const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    // para ios
    zIndex: 999,
    // para android
    elevation: 9,
    top: 30,
    left: 5,
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