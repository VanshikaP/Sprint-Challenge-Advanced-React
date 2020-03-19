import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocalStorage } from './useLocalStorage'

export const useFetch = () => {

    const [playerData, setPlayerData] = useLocalStorage('playerData', [])

    useEffect(() => {
        axios
        .get('http://localhost:5000/api/players')
        .then(response => {
            console.log(response.data);
            setPlayerData(response.data)
        })
        .catch(err => console.log(err))
    }, [])


    return [playerData, setPlayerData];
}
