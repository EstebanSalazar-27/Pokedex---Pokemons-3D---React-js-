import React from "react";
import Navbar from "./components/navbar/navbar";
import SearchBar from "./components/searchBar/search";
import Pokedex from "./components/pokedex/pokedex";
import getPokemons, { getPokemonData } from "./services/PokeApi";
import { useState, useEffect } from "react";
import Spinner from "./components/spinner/spinner";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)

  const fetchPokemons = async () => {

    try {
      setLoading(true)
      const data = await getPokemons(20, 25 * page)
      const getPokemonInfo = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(getPokemonInfo)
      setPokemons(results)
      console.log(results)
      setLoading(false)
      setTotal(Math.ceil(data.count / 25))
    } catch (err) {
    }
  }


  useEffect(() => {
    fetchPokemons()
  }, [page]);


  return (
    <div className="App">
      <Navbar />
      <SearchBar />

      <Pokedex page={page} loading={loading} total={total} setPage={setPage} pokemons={pokemons} />
    </div>
  );
}

export default App;
