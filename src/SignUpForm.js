export default function SignUpForm() { 
    return (
        <div>
            <div className="signup-form">
                <form>
                    <h1 className="signup-text">Sign Up</h1>
                    <label className="form">Name: </label>
                    <input type="text" placeholder="Name" name="name" ></input>

                    <label className="form">Email Address: </label>
                    <input type="text" placeholder="Email" name="email" className="signup-box"/>
                    <label>Password: </label>
                    <input type="password" placeholder="Password" name="password" className="signup-box" />
                    <button className="signup-btn">Sign Up</button>
                </form>
            </div>
        </div>
    )
}