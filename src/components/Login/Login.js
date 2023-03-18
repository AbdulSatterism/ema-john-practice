import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Login.css'

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user, 'user sign in ');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='signup-container'>
            <h2 className='sign-header'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" name="email" placeholder='enter email' required id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name="password" placeholder='enter password' required id="" />
                </div>

                <button className='signup-btn' type="submit">Login</button>
                <p className='login-link'>New to ema-john ?<Link to='/signup'><span className='link'>Create new account</span></Link></p>
            </form>
        </div>
    );
};

export default Login;