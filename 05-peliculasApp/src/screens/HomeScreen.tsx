import React from 'react'
import { ActivityIndicator,  Dimensions,  View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'

const { width:windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

    const { peliculasEnCine,isLoading } = useMovies()
    const {top} = useSafeAreaInsets();

    if(isLoading){
        return(
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ActivityIndicator
                    size={100}
                    color={'red'}
                />
            </View>
        )
    }
    return (
        <View style={{
            marginTop: top+20,
        }}>
            {/* <MoviePoster movie={peliculasEnCine[12]}/> */}
            <Carousel
            data={peliculasEnCine}
            renderItem={({item}) => <MoviePoster movie={item} />}
            itemWidth={200}
            sliderWidth={windowWidth}
            />
        </View>
    )
}