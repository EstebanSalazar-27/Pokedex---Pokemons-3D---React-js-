import React, { createContext, useState } from "react";

export const SearchValue = createContext()


export default function SearchValueProvider({ children }) {
    const [searchValue, setSearchValue] = useState("")

    return (
        <SearchValue.Provider value={{
            searchValue,
            setSearchValue,
        }}>
            {children}
        </SearchValue.Provider>
    )
}