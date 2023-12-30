import { useState } from "react";
import hospital from '../assets/hospital.jpg';
import { Link } from "react-router-dom";
import '../css/Login.css'

export default function Login() {
    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        setValues({
            username: "",
            password: ""
        });
    }

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    return (
        <>
            <div className="page-body">
                <div className="login-card">
                    <form onSubmit={handleSubmit}>
                        <div className="login-details">
                            <h1>Login</h1>
                            <div className="form-data">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" placeholder="username" onChange={handleChange} />
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="********" onChange={handleChange} />
                            </div>
                            <button type="submit">Login</button>
                            <div className='register-link'>
                                <p>Don't have an account ?</p>
                                <Link to='/' className="link-text">Register</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="side-image">
                    <img src={hospital} alt="hospital" className="full-width-image" />
                </div>
            </div>
        </>
    );


}
