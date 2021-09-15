<<<<<<< HEAD
import React, {FunctionComponent, useState, useEffect} from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';
import PokemonCard from './components/pokemon-card';
import PokemonList from './pages/pokemon-list';
  
const App: FunctionComponent = () => {

 return (
	<PokemonList />
=======
import React, {FunctionComponent, useEffect, useState} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
  
const App: FunctionComponent = () => {
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);

 useEffect(() => {
  setPokemons(POKEMONS);
 }, []);
    
 return (
   <div>
     <h1>Bienvenu sur votre Pokédex</h1>
     <p>Vous avez actuellement {pokemons.length} dans votre Pokédex</p>
   </div>
 
>>>>>>> 4d6c2dea2c63ff14787ae12553da5751114f9f90
 )
}
  
export default App;