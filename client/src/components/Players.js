import React from 'react'

const Players = ({playerData}) => {
    return (
        <div className='players-container'>
            {playerData.map(player => {
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

export default Players