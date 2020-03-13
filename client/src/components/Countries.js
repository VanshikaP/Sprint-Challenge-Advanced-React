import React, {useState} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Country from './Country'

const Countries = ({playerData}) => {
    const [countryData, setCountryData] = useState([]);

    playerData.map(player => {
        const countryName = player.country.split(' ').join('')
        if(!countryData.includes(countryName)){
            setCountryData([...countryData, countryName])
        }
    })

    const insertWhitespace = (s) => {
        const caps = /([A-Z])/g
        return s.replace(caps, ' $1').trim()
    }

    return (
        <div className='country-container'>
            <div className='countries-container'>
                {countryData.map(country => {
                    return (
                        <div className='country'>
                            <Link className='country-link' to={`/country/${country}`}> {insertWhitespace(country)} </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Countries