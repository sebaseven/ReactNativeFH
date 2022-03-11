import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MovieDBMovieResponse, Movie } from '../interfaces/movieInterface';

interface MovieState {
    nowPlaying: Movie[];
    upcoming: Movie[];
    popular: Movie[];
    topRated: Movie[];
}

export const useMovies = () => {

    const [moviesState, setMoviesState] = useState<MovieState>(
        {
            nowPlaying: [],
            upcoming: [],
            popular: [],
            topRated: []
        }
    )

    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBMovieResponse>('/now_playing')
        const popularPromise = movieDB.get<MovieDBMovieResponse>('/popular')
        const topRatedPromise = movieDB.get<MovieDBMovieResponse>('/top_rated')
        const upcomingPromise = movieDB.get<MovieDBMovieResponse>('/upcoming')


        const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);
        //console.log(response,'respuesta');
        setMoviesState({
            nowPlaying: response[0].data.results,
            upcoming: response[3].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
        })

        setIsLoading(false);
    }
    useEffect(() => {
        //now playing
        getMovies();

    }, [])
    return {
        ...moviesState
        , isLoading
    }
}
