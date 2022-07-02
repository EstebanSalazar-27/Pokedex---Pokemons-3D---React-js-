import React from "react";

const totalPokemons = 1057

export const searchPokemon = async (pokemonName) => {
  const urlApi = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  try {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
  } catch (err) { }
}


const getPokemons = async (limit = totalPokemons) => {
  try {
    const urlApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    const response = await fetch(urlApi)
    const data = await response.json()

    return data
  } catch (err) {
  }
}

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (err) { }
}


export default getPokemons


