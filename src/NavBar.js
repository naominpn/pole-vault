import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar(props) {

    const handleClick = () => {
        props.handleLoginClick()
    }

    return( 
        <div className="header">
            <h1 className="title">The Pole Vault</h1>

            <div>
                <Link to="/login"> 
                    <span>
                        Sign In
                    </span>
                </Link>
            </div>
        </div>
    )   
}