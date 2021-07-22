import './LoginForm.css'
import { Link } from 'react-router-dom'

export default function LoginForm() { 
    return (
        <div>
            <div className="login-form">
                <form>
                    <h1 className="login-text">Sign In</h1>
                    <label>Email Address</label>
                    <input type="text" placeholder="email" name="email" className="login-box"/>
                    <label>Password: </label>
                    <input type="password" placeholder="password" name="password" className="login-box" />
                    <button className="login-btn">login</button>
                </form>

                <span>Don't have an account?</span>
                <span>Sign Up</span> <Link to="/signup"><span>Here</span></Link>
            </div>
        </div>
    )
}