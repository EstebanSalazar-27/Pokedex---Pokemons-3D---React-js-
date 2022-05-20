import React from "react";

export const FavoriteContext = React.createContext({
   favoritePokemons: [],
   updateFavoritePokemon: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider