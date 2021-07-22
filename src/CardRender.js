import './CardRender.css'
import { AppContext } from './AppContext';
import { useContext, useState } from 'react';

export default function Card(props) {
    let { filter, tricks } = props
    let filterTricks = tricks.filter(trick => trick.level === filter || filter == "All")

    const {numAchieved, setNumAchieved} = useContext(AppContext)

    function handleChange() {
        setNumAchieved(numAchieved+1) 
        console.log(numAchieved)
    }

    
    return(
        filterTricks.map(trick => 
            <div className="card">
                <img src={trick.image} alt="" /> 
                <label>{trick.name}</label>
                <label htmlFor="">Achieved</label><input type="checkbox" onChange={handleChange} />

            </div>
        )
    )
}