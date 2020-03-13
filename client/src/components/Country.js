import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Country = ({playerData}) => {
    const {countryName} = useParams();
    const [players, setPlayers] = useState([]);

    const insertWhitespace = s => {
        const caps = /([A-Z])/g
        return s.replace(caps, ' $1').trim()
    }

    useEffect(() => {
        let arr = [];
        playerData.map(player => {
            if(player.country === insertWhitespace(countryName)){
                // console.log('Player: ', player.name, ' Country: ', player.country);
                arr.push(player);
                // console.log('Players: ', arr)
            }
            return arr
        })
        // console.log('Final Players: ', arr);
        setPlayers(arr);
    }, [countryName])


    return (
        <div className='players-container'>
            {players.map(player => {
                return (
                    <div className='player-card' key={player.id}>
                        <h3 className='player-name'> {player.name} </h3>
                        <p className='player-country'> {player.country} </p>
                    </div>
                )
            })}
        </div>
    )
    
}

export default Country;