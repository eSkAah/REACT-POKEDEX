import React, {FunctionComponent, useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-details';
import PokemonList from './pages/pokemon-list';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';

const App: FunctionComponent = () => {

 return (
	 <Router> {/*Mise en place du système de Routage*/}
		<div>
			{/*La barre de navigation commune à toutes les pages*/}
			<nav>
				<div className="nav-wrapper teal">
				   <Link to="/" className="brand-logo center">Pokédex</Link>
				</div>
			</nav>
			{/*Système de géstion des routes de notre application*/}
			<Switch>
				<Route exact path="/" component={PokemonList} />
				<Route exact path="/pokemons" component={PokemonList} />
				<Route exact path="/pokemons/add" component={PokemonAdd} />
				<Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
				<Route exact path="/pokemons/:id" component={PokemonsDetail} />
				<Route component={PageNotFound} />
			</Switch>
		 </div>
	 </Router>
		  
 )
}
  
export default App;