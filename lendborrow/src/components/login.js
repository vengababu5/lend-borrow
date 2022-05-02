import { useState } from "react";

import { useNavigate } from 'react-router-dom'



const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const userNameHandler = (e) => {
        setUserName(e.target.value);
    }
    const pasdswordHandler = (e) => {
        setPassword(e.target.value);
    }
    const submit = () => {
        if (userName === 'test@gmail.com' && password === '12345') {
            navigate('/dashboard');
        }
    }
    return (
        <>
            <form onSubmit={submit}>
                <h3>Log in</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={userName} className="form-control" placeholder="Enter email" onChange={userNameHandler} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} className="form-control" placeholder="Enter password" onChange={pasdswordHandler} />
                </div>


                <button type="submit" className="btn btn-color btn-lg btn-block">Log in</button>
                <div className="forgot-password">
                    Forgot password?
                </div>
            </form>
        </>
    );
}
export default Login;
