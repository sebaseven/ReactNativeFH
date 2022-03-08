import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {

    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        const peliculas = resp.data.results;
        setPeliculasEnCine(peliculas);
        setIsLoading(false);
    }
    useEffect(() => {
        //now playing
        getMovies();

    }, [])
    return {
        peliculasEnCine,isLoading
    }
}
