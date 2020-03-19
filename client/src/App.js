import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import { useFetch } from './hooks/useFetch'

import NavBar from './components/NavBar'
import Players from './components/Players'
import Countries from './components/Countries'
import Country from './components/Country'

import './App.css';

function App() {
  const [playerData, setPlayerData] = useFetch();
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <Route exact path='/'>
            <Players playerData={playerData} />
          </Route>
          <Route exact path='/country'>
            <Countries playerData={playerData} />
          </Route>
          <Route exact path='/country/:countryName'>
            <Country playerData={playerData} />
          </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
