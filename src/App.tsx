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
 
 )
}
  
export default App;