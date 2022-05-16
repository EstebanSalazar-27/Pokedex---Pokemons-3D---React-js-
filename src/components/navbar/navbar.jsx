import React from "react";
import "./navbar.scss"

export default function Navbar (){
  
  const imgBrand = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  const imgPoke = "https://cdn-icons-png.flaticon.com/128/188/188932.png"
  return(
    <nav className="navbar">
     <div/>
      <picture><img src={imgBrand} alt="pokeApi-logo" className="navbar__brand" /></picture>
      
      <picture><img src={imgPoke} alt="pokebola" className="navbar__pokebola" /></picture>
    </nav>
  )
}