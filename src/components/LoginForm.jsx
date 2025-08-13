import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/slices/authSlice'

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    // console.log(user)
    const cartItems = useSelector(state => state.cart.cart)
    console.log(cartItems, 'ss')

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user'
    })
    const [error, setError] = useState({})

    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev, [name]: value
        }));

    };
    const validate = () => {
        const newError = {}

        if (!inputs.email.trim()) {
            newError.email = 'Email is required'
        }
        if (!inputs.password.trim()) {
            newError.password = 'Password is required'
        }

        setError(newError)
        return Object.keys(newError).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(login(inputs))
            localStorage.setItem("currentUser", JSON.stringify(inputs));
            if (inputs.name && cartItems.length > 0) {
                localStorage.setItem(`cart_${inputs.name}`, JSON.stringify(cartItems));
            }
            navigate('/account')
        }
    };

    return (
        <div className='login-page'>
            <form onSubmit={handleSubmit}>
                <div className='name'>
                    <label>Name</label><br />
                    <input type="name"
                        name='name'
                        value={inputs.name}
                        onChange={handleChange} />
                </div>
                <div className='email-section'>
                    <label>Email:</label><br />
                    <input type="email"
                        name='email'
                        value={inputs.email}
                        onChange={handleChange} />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                </div>
                <div className="password-section">
                    <label>Password:</label><br />
                    <input type="password"
                        name='password'
                        value={inputs.password}
                        onChange={handleChange} />
                    {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;
