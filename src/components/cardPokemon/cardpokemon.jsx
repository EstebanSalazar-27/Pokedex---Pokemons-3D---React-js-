/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./cardPokemon.scss"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const CardPokemon  = ({idx,name,url,sprites,weight,types,abilities}) =>{
  const [skillsPokemon, setSkillsPokemon] = useState(false)
  const cardModel = skillsPokemon ? "skills-model" : ""
  const pokemonType = types
  const pokemonAbilities = abilities
  const style = {
    animationDelay: `${idx * 100}ms`,
    transformOrigin: "left"
  }
  function datesPokemonToSkills(){
    setSkillsPokemon(!skillsPokemon)
  }
  return(
  <div className={`pokedex__pokemon-card card-${cardModel}`} style={style} onClick={() => console.log(idx)} >
        {/*Conditional render card  */}
      { !skillsPokemon
       ?
        <button className="pokemon-card__skills-btn" onClick={datesPokemonToSkills}>Skills</button>
       :
         <button className="pokemon-card__skills-btn" onClick={datesPokemonToSkills}> <FontAwesomeIcon className="closed-modal-skills" icon={faXmarkCircle}/> </button>
       }
        <div className="pokemon-card__img">
         <img src={sprites.other.home.front_default} className="pokemon-card_pokemon-sprite" alt={`Pokemon Sprite${name}`} />
        </div>
        
    <div className={` ${skillsPokemon ? "pokemon-card__cont-colum skills" : "pokemon-card__cont-colum hiddenSkills"}`}>
         
           {/* name id  */}
       <div className="pokemon-card__datos">
         <div><span className="pokemon-card__id-pokemon">
          <span>weight: {weight}</span></span>
         </div>

         <div><h4 className="pokemon-card__name-pokemon">{name}</h4></div>
         <div><span className="pokemon-card__id-pokemon">#{idx+1}</span></div>
    </div>

          {/* chateristics */}
      <div className="pokemon-card__caracteristicas-pokemon">
        {pokemonType.map((type,idx) =>{
          return <div className={`button-type bg-${type.type.name}`} key={idx+1}>{type.type.name}</div>
        })} 
        <img src="https://cdn-icons-png.flaticon.com/128/929/929417.png" className="caracteristica__life-icon" alt="" />
       </div>
     </div>
     
 </div>
  )
}

export default CardPokemon