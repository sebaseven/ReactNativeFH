import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';


interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}
export const useMovieDetalis = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        cast: [],
        movieFull: undefined
    })

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = movieDB.get<CreditsResponse[]>(`/${movieId}/credits`)
        const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise, castPromise])
        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }
    useEffect(() => {
        getMovieDetails();
    }, [])
    return {
        isLoading: state.isLoading,
        movieFull: state.movieFull,
        cast: state.cast
    }
}
