import tricks from './data.js'
import React, { useState, createContext } from 'react';
export const AppContext = createContext();


export function AppProvider(props) {
    const [filter, setFilter] = useState("All")
    const [totalAchieve, setTotalAchieve] = useState(1)
    const [numAchieved, setNumAchieved] = useState(0)
    
    return <AppContext.Provider value={{filter, setFilter, totalAchieve, setTotalAchieve, numAchieved, setNumAchieved}}>
        {props.children}
    </AppContext.Provider>
}
