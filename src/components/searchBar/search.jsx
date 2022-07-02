import React, { useContext } from "react";
import "./searchbar.scss"
import { useState } from "react";
import { searchPokemon } from "../../services/PokeApi";
import { SearchValue } from "../../context/searchbarContext";


export default function SearchBar() {
  const [valueSearch, setValueSearch] = useState("")
  const [pokemon, setPokemon] = useState("")
  // Context
  const { setSearchValue } = useContext(SearchValue)


  const valueToState = (evt) => {
    setSearchValue(evt.target.value.toLowerCase())
  }

  const buscarPokemon = async (e) => {
    const data = await searchPokemon(valueSearch)
    setPokemon(data)
  }

  return (
    <div className="cont-searchbar">

      <input type="text" className="searchbar" placeholder="Search Pokemon" onChange={valueToState} />

      

    </div>

  )
}