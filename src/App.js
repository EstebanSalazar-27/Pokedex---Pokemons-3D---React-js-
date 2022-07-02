import React from "react";
import Navbar from "./components/navbar/navbar";
import SearchBar from "./components/searchBar/search";
import Pokedex from "./components/pokedex/pokedex";
import getPokemons, { getPokemonData } from "./services/PokeApi";
import { useState, useEffect } from "react";
import { FavoriteProvider } from "./context/context";
import SearchValueProvider from "./context/searchbarContext";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true)
  const [favorite, setFavoritesPokemon] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons()
      const getPokemonInfo = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(getPokemonInfo)
      setPokemons(results)
      setLoading(false)

    } catch (err) {
    }
  }


  useEffect(() => {
    fetchPokemons()
  }, []);

  const updateFavoritePokemons = (name) => {
    const update = [...favorite]
    const isFavorite = update.indexOf(name)
    if (isFavorite >= 0) {
      update.slice(isFavorite, 1)
    } else {
      update.push(name)
    }
    setFavoritesPokemon(update)
  }
  return (
    <FavoriteProvider value={{
      favoritePokemons: favorite,
      updateFavoritePokemon: updateFavoritePokemons
    }}>
      <div className="App">
        <Navbar />
        <SearchValueProvider>
          <SearchBar />
          <Pokedex loading={loading} pokemons={pokemons} />
        </SearchValueProvider>
      </div>

    </FavoriteProvider>
  );
}

export default App;
