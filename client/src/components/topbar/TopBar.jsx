import React from 'react';
import './TopBar.css';
import {Link} from 'react-router-dom'

export default function TopBar() {
  const user = false;
 
  return (
    <div className='top'>
      <div className='topLeft'>
      
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/' className='link'>HOME</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/about'>ABOUT</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/contact'>CONTACT</Link>
          </li>
          <li className='topListItem'>
           <Link className='link' to='/write'>WRITE</Link>
          </li>
          <li className='topListItem'>
           { user && <Link className='link'>LOGOUT</Link>}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {
          user ?
          (<img
          className='topImg'
          src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt=''
        />
       ): (
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/login' className='link'>LOGIN</Link>
          </li>
          <li className='topListItem'>
          <Link to='/register' className='link'>REGISTER</Link>
          </li>
        </ul>
       )
        }
         <i className='fa-solid fa-magnifying-glass topSearchIcon'></i>
        
      </div>
    </div>
  );
}
