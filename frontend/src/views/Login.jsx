import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import heroImg from '../assets/images/hero.png'
import modjawIcon from '../assets/images/mj.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import sphereIcon from '../assets/images/sphere-icon.png'

const Landing = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // for demo purposes only!
        if (username === "MODJAW_DEMO" && password === "Lindaisthebest!") {
            // Successful login - navigate to dashboard
            navigate('/dashboard');
        } else {
            setError('Invalid credentials.');
        }
    };


    return (
        <div id="main-container">
            <div id="background">
            </div>
            <div className="hero-container">
                <div className="left">
                    <img src={heroImg} alt="" />
                </div>
                <div className="right">
                    <div className="header">
                        <h1>SIGN IN TO CONTINUE</h1>
                        <p>Access training on MODJAW workflows, motion data integration, and advance techniques.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="login">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="error">
                                <div className="errorMessage">{error}</div>
                                <a href="#" className='resetPassword'>Forgot Password?</a>
                            </div>
                        </div>

                        <button type="submit" className="login-button">
                            Sign In
                        </button>
                    </form>

                    <div className="social-media">
                        <a href="https://modjaw-preprod-sphere.com/login" aria-label="Sphere Platform" target="_blank">
                            <img src={sphereIcon} alt="Modjaw Sphere Platform Logo" className='social-icons' />
                        </a>
                        <a href="https://modjaw.com/en" aria-label="Modjaw - ALL in One Solution" target="_blank">
                            <img src={modjawIcon} alt="Modjaw Logo" className='social-icons' />
                        </a>
                        <a href="https://www.facebook.com/modjawlive" aria-label="Modjaw on Facebook" target="_blank">
                            <img src={facebook} alt="Facebook Logo" className='social-icons' />
                        </a>
                        <a href="https://www.instagram.com/modjawlive" aria-label="Modjaw on Instagram" target="_blank">
                            <img src={instagram} alt="Instagram Logo" className='social-icons' />
                        </a>
                        <a href="https://www.linkedin.com/company/modjaw/posts/?feedView=a;;" aria-label="Modjaw on LinkedIn" target="_blank">
                            <img src={linkedin} alt="LinkedIn Logo" className='social-icons' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing