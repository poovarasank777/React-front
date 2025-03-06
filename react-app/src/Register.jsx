import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/register', { username, email, password })
            .then(result => {
                console.log(result);
                alert("Account created successfully!");
                navigate('/Login');
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="background">
            <div className="login-box">
                <h3>FlimFix</h3>
                <h4>Create an Account</h4>
                <form onSubmit={handleRegister}>
                    <table className="login-table">
                        <tbody>
                            <tr>
                                <td><label htmlFor="email">Email:</label></td>
                                <td>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        required 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="username">Username:</label></td>
                                <td>
                                    <input 
                                        type="text" 
                                        id="username" 
                                        value={username} 
                                        onChange={(e)=>setUsername(e.target.value)} 
                                        required 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="password">Password:</label></td>
                                <td>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        value={password} 
                                        onChange={(e)=>setPassword(e.target.value)} 
                                        required 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{textAlign: "center" }}>
                                    <button type="submit"className="button">Sign Up</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <p>
                    Already have an account? 
                    <button className="link-button" onClick={()=>navigate('/login')}>
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;
