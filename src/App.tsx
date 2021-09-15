import React, {FunctionComponent, useState, useEffect} from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';
import PokemonCard from './components/pokemon-card';
import PokemonList from './pages/pokemon-list';
  
const App: FunctionComponent = () => {

 return (
	<PokemonList />
 )
}
  
export default App;