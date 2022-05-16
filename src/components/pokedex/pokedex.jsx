import React from "react";
import "./pokedex.scss"
import CardPokemon from "../cardPokemon/cardpokemon";
import Pagination from "../pagination/pagination"
import Spinner from "../spinner/spinner";

export default function Pokedex ({pokemons,page,setPage,total,loading}){

  const lastPage= () =>{
   const lastPage= Math.max(page - 1, 0)
   setPage(lastPage)
  }
  const nextPage=()=>{
    const nextPage= Math.min(page + 1, total)
    setPage(nextPage) 
  }
  return(
    <div>
      <header className="header">
        <h1 className="header__tittle">Pokedex</h1>
       <Pagination page={page + 1} totalPages={total} onLeftClick={lastPage} onRightClick={nextPage}/>
      </header>
      {loading
        ? 
        <Spinner/>
        :
        <div className="pokedex">
          {pokemons.map(({name,url,sprites,weight,types,stat,abilities}, idx) => {
              return(
                <CardPokemon name={name} sprites={sprites} types={types} abilities={abilities} stat={stat} weight={weight}  url={url} idx={idx} key={name}/>  
              )
            })
          }
        </div>
      }
   
    </div>
  )
}