import React, { useState , useEffect } from 'react'
import './Sidebar.css';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { PiBicycleFill } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";

function Sidebar() 
{
   
  useEffect(()=>{
      
   
 document.querySelector('.sidebar').onmousemove = (e) =>
   {
     document.querySelectorAll('.logocar').forEach(elm => {
        let speed = elm.getAttribute('data-speed');
        let x= (window.innerWidth - e.pageX * speed )/90;
        let y=(window.innerHeight - e.pageY * speed)/90;
        elm.style.transform = `translateX(${y}px) translatey(${x}px)`;
     })
   }

},[])


   const[sidebarclose,Setsidebar]=useState(false);
   
  return (
    <div className='sidebar'>
         <div className={sidebarclose ?'sidebar-container sidebarclose' : 'sidebar-container'}>
               <div className='sidebar-header'>
                  <div className='sidebar-header-logo'>
                      <div className='logocar' data-speed="10"></div>
                      <h1>VehicleService</h1>
                  </div>
                  <div className='sidebar-closeicon' onClick={ ()=>{Setsidebar(!sidebarclose)}}><FaAngleDoubleLeft  className='left'/><FaAngleDoubleRight className='right'/></div>
               </div>

               <div className='sidebar-icons'>
                  <div className='search'><CiSearch  className='searchicon'/><input type='text' placeholder='Search...'></input></div>

                  <div className='sidebaricon' title='Home'><MdHome  className='icon'/><span>Home</span></div>
                  
                  <div className='sidebaricon' title='Bike'><RiMotorbikeFill  className='icon'/><span>Bike</span></div>
                  <div className='sidebaricon' title='Car'><FaCar  className='icon'/><span>Car</span></div>
                  <div className='sidebaricon' title='Bicycle'><PiBicycleFill  className='icon'/><span>Cycle</span></div>
                  <div className='sidebaricon' title='History'><FaHistory className='icon' /><span>History</span></div>
                  <div className='sidebaricon profile' title='Profile'><FaCircleUser className='icon' /><span>Profile</span></div>
                  <div className='sidebaricon' title='Logout'><MdOutlineLogout  className='icon'/><span>Logout</span></div>
                  </div>

               </div>

               <div className='sidebar-logout'></div>
         </div>





  )
}

export default Sidebar;