import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3001/Login',{username,password})
            .then(result=>{
                console.log(result);
                navigate('/fronte');
            })
            .catch(err=>console.log(err));
    };
    return (
        <div className="background">
            <div className="login-box">
                <h3>FlimFix</h3>
                <h4>Login</h4>
                <form onSubmit={handleLogin}>
                    <table className="login-table">
                        <tbody>
                            <tr>
                                <td><label htmlFor="username">Username:</label></td>
                                <td>
                                    <input 
                                        type="text" 
                                        id="username" 
                                        value={username} 
                                        onChange={(e) => setUsername(e.target.value)} 
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
                                        onChange={(e) => setPassword(e.target.value)} 
                                        required 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{textAlign:"center"}}>
                                    <button type="submit" className="button">Login</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <p>
                    Don't have an account? 
                    <button className="link-button" onClick={()=>navigate('/Register')}>
                        Create an Account
                    </button>
                </p>
            </div>
        </div>
    );
};
export default Login;
