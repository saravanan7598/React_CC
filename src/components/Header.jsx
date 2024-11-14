import React from 'react'
import './Header.css';

function Header() {
  return (
    <div>
        <div className='header-container'>
               <div className='header-list'>
                     <p>About</p>
                     <p>Service</p>
                     <p>Contact</p>
                     <button>Sign In/Up</button>
               </div>
        </div>
    </div>
  )
}

export default Header;