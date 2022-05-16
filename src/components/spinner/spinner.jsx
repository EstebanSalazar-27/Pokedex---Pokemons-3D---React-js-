import React from "react";
import "./spinner.scss"

export default function Spinner (){

  return(
    <div className="cont-loader-spinner">
      <div className="pokemon"></div>
      <span className="loeader__text-state">Loading Pokemons...</span>
    </div>
  )
}