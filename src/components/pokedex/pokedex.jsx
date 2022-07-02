import React, { useContext } from "react";
import "./pokedex.scss"
import CardPokemon from "../cardPokemon/cardpokemon";
import Pagination from "../pagination/pagination"
import Spinner from "../spinner/spinner";
import { SearchValue } from "../../context/searchbarContext";

export default function Pokedex({ pokemons, page, setPage, total, loading }) {

  const { searchValue } = useContext(SearchValue)


  return (
    <div>
      <header className="header">
        <h1 className="header__tittle">Pokedex</h1>
   
      </header>
      {loading
        ?
        <Spinner />
        :
        <div className="pokedex">
          {pokemons.filter(pokemon => searchValue ? pokemon.name.includes(searchValue) : true).map(({ name, url, sprites, weight, types, stat, abilities }, idx) => {
            return (
              <CardPokemon name={name} sprites={sprites} types={types} abilities={abilities} stat={stat} weight={weight} url={url} idx={idx} key={name} />
            )
          })}

        </div>
      }

    </div>
  )
}