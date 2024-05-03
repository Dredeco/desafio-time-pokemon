import { createContext, useState } from "react";

export const AppContext = createContext({
    nameFilter: '',
    setNameFilter: (value: string) => {},
    typeFilter: '',
    setTypeFilter: (value: string) => {},
    teamChanged: false,
    setTeamChanged: (value: boolean) => {},
})

interface ProviderProps {
    children: any
}

export const AppContextProvider = ({children}: ProviderProps) => {
    const [nameFilter, setNameFilter] = useState('')
    const [typeFilter, setTypeFilter] = useState('Tipos')
    const [teamChanged, setTeamChanged] = useState(false)

    return (
        <AppContext.Provider value={{nameFilter, setNameFilter, typeFilter, setTypeFilter, teamChanged, setTeamChanged}}>
            {children}
        </AppContext.Provider>
    )
}