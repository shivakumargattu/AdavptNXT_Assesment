import React from 'react'
import { MdOutlineNightlight } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineTranslate } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";







const Navbar = () => {
  return (
    <div>
    
    <nav className='border'>
  <img src="https://adaptnxt.com/wp-content/uploads/2023/11/adaptnxt-final_purple-rect-_19Nov-300x511-1.png" size="20px" style={{padding:"5px"}} alt="logo"/>
        <ul>
          <li><MdOutlineNightlight size='20px' /></li>
          
          <li><FaRegBell size='20px' />
</li>
          <li><MdOutlineTranslate size='20px' /></li>
          <li><RxAvatar size='23px'/></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar