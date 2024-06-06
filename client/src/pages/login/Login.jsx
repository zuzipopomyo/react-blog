
import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <>
     
    <div className='login'>
        <div className='loginTitle'>Login</div>
        <form className='loginForm'>
            <label htmlFor="">Email</label>
            <input type="email" className='loginInput' placeholder='enter your email...'/>
            <label htmlFor="">Password</label>
            <input type="password" className='loginInput' placeholder='enter your password...'/>
            <button className='loginBtn' type='submit'>
              <Link to='/login'>Login</Link>
            </button>
        </form>
            <button className='registerBtn'>
              <Link to='/register'>Register</Link>
            </button>
    </div>
    </>
  )
}
