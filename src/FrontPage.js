import './FrontPage.css'
import { Link } from 'react-router-dom'

export default function FrontPage () {
    return (
        <div className="front-page">
            <div className="front-page-center">
                <h1 className="heading">Welcome to the Pole Vault</h1>
                <span><Link to="/main" >Enter</Link></span> 
            </div>
        </div>
    )
}