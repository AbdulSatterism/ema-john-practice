import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './SignUp.css'

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className='signup-container'>
            <h2 className='sign-header'>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" name="name" placeholder='enter name' required id="" />
                </div>
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

                <button className='signup-btn' type="submit">Sign Up</button>

                <p className='login-link'>Already have an account?<Link to='/login'><span className='link'>Login</span></Link></p>
            </form>
        </div>
    );
};

export default SignUp;