import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

    const { topRated,popular,nowPlaying,upcoming, isLoading } = useMovies()
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
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
        <ScrollView>
            <View style={{
                marginTop: top + 20,
            }}>
                {/* Carrousel Principal */}
                <View style={{
                    height: 370,
                }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }) => <MoviePoster movie={item} />}
                        itemWidth={200}
                        sliderWidth={windowWidth}
                        inactiveSlideOpacity={0.9}
                    />
                </View>
                {/* Carrousel Populares */}
               <HorizontalSlider title='Top Rated' movies={topRated}/>
               <HorizontalSlider title='Popular' movies={popular}/>
               <HorizontalSlider title='Upcoming' movies={upcoming}/>


            </View>
        </ScrollView>

    )
}