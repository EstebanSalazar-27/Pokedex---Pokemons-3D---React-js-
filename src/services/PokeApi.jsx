import React from "react";


export  const searchPokemon =async (pokemonName) =>{
  const urlApi = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  try{
    const response = await fetch(urlApi)
    const data = await response.json()
    
    
    return data
    
  }catch(err){

  }
}


 const getPokemons = async (limit =20, offset=0) =>{
  try{
    const urlApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}.`
    const response = await fetch(urlApi)
    const data = await response.json()
    
    return data
    
  }catch(err){

  }
}

export const getPokemonData = async (url) =>{
  try{
   
    const response = await fetch(url)
    const data = await response.json()
    
    
    return data
    
  }catch(err){}
}



export default getPokemons


