import React from "react";
import { useState } from "react";
import { searchPokemon } from "../../services/PokeApi";

import "./searchbar.scss"

export default function SearchBar () {
  const [valueSearch, setValueSearch] = useState("")
  const [pokemon, setPokemon] = useState("")

  const  valueToState = (evt)  => {
    setValueSearch(evt.target.value)
  }

  const buscarPokemon = async (e) =>{
    const data = await searchPokemon(valueSearch)
    setPokemon(data)
  }
  
  return(
    <div className="cont-searchbar">
      
      <input type="text" className="searchbar" placeholder="Search Pokemon" onChange={valueToState}/>    
     
      <button className="searchbar__btn" onClick={() => buscarPokemon()}>Search</button>
      
    </div>
    
  )
}