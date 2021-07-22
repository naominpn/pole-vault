import './AsideBar.css';
import { useContext } from 'react'
import { AppContext } from './AppContext';

export default function AsideBar() {
    const { 
        filter,
        setFilter
    } = useContext(AppContext)

    return(
        <div className="aside">
            <label className="asidebar-heading">Difficulty</label>
            <ul>
                <li><a href="#" onClick={() => {setFilter('All')}}>All</a></li>
                <li><a href="#" onClick={() =>{setFilter('Beginner')}}>Beginner</a></li>
                <li><a href="#" onClick={() =>{setFilter('Intermediate')}}>Intermediate</a></li>
                <li><a href="#" onClick={() =>{setFilter('Advanced')}}>Advanced</a></li>
            </ul>
        </div>
    )
}