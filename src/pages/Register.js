import styles from './Register.module.css';
import transparent from '../assets/transparent.png'
import axios from "axios"
import { Link } from "react-router-dom"
// import {useNavigate} from "react-router-dom"

function Register () {

    function submitHandler ( e ) {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        axios.post( "http://localhost:4000/register", data )
            .then( res => {
                console.log( res.data.response )
                localStorage.setItem( "token", res.data.response.token )
                window.location = "/"
            } )
    }

    return (
        <div className={ styles.body }>
            <div className={ styles.heading }>
                <img src={ transparent } alt="website logo"></img>
                <h1>Register on Everypost</h1>
            </div>
            <div className={ styles.container }>
                <form className={ styles.form } onSubmit={ submitHandler }>
                    <div className={ styles.formElement }>
                        <label htmlFor='name' >Name</label>
                        <input type='text' id='name' placeholder='John Doe' />
                    </div>
                    <div className={ styles.formElement }>
                        <label htmlFor='email' >Email</label>
                        <input type='text' id='email' placeholder='abc@example.com' />
                    </div>
                    <div className={ styles.formElement }>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' placeholder='Enter your password' />
                    </div>
                    <button type='submit'>Log in</button>
                </form>
                <div className={ styles.links }>
                    <Link>Forgot your password ?</Link>
                    <Link to="/login">Already have an account ?</Link>
                    <Link>Login via SSO</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;