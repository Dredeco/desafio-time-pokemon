import { createContext, useState } from "react";

export const AppContext = createContext({
    nameFilter: '',
    setNameFilter: (value: string) => {},
    typeFilter: '',
    setTypeFilter: (value: string) => {},
})

interface ProviderProps {
    children: any
}

export const AppContextProvider = ({children}: ProviderProps) => {
    const [nameFilter, setNameFilter] = useState('')
    const [typeFilter, setTypeFilter] = useState('')

    return (
        <AppContext.Provider value={{nameFilter, setNameFilter, typeFilter, setTypeFilter}}>
            {children}
        </AppContext.Provider>
    )
}