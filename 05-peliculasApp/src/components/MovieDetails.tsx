import React from 'react'
import { View, Text, FlatList } from 'react-native';
import currencyFormatter from "currency-formatter";
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActorItem } from './ActorItem';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles de la pelicula */}
            <View style={{
                marginHorizontal: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Icon
                        name="star-outline"
                        color={'#ffd700'}
                        size={20}
                    />
                    <Text> {movieFull.vote_average} </Text>
                    <Text style={{ marginLeft: 5 }}> - {movieFull.genres.map(genero => genero.name).join(', ')} </Text>
                </View>
                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ marginTop: 5, fontSize: 15 }}>
                    {movieFull.overview}
                </Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ marginTop: 5, fontSize: 18 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>
            {/* Casting  */}
            <View style={{
                marginTop: 10,
                marginBottom:100
            }}>
                <Text style={{fontSize:23,marginTop:10,marginHorizontal:20,fontWeight:'bold'}}>
                    Actores
                    </Text>
                 {/* <ActorItem actor={cast[0]} />  */}
                 <FlatList data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <ActorItem actor={item} />}
                    style={{
                        marginTop:10,
                        height:70
                    }}>
                 </FlatList>
            </View>


        </>
    )
}
