import React, { useState } from 'react'
import bg from '../images/file.png';
import './Homepagecontent.css';
import { FaLeaf } from 'react-icons/fa';

function Homepagecontent() 
{
  // useEffect(()=>{
  //     let car=document.querySelector('.bg-img');
  //      window.addEventListener('scroll',()=>
  //     {
  //       let value=window.scrollY;
  //       car.style.marginTop = - value * 1.5 +'px' ; 
  //      })

  // },[])


  const[fixed,setFixed]=useState(false);

  function setFixedthe() 
  {
    if(window.scrollY >= 190)
    {
      setFixed(true);
    }
    else{
    setFixed(false);
    }
  }
  window.addEventListener("scroll",setFixedthe);

  return (
    <div>
       <div className="overall-container">
            <div> <h1 id='text'>BOOK YOUR SERVICE <span>IN JUST A FEW CLICKS</span></h1></div>

            <div className = {fixed ? 'date-container setfixed' : 'date-container'}>
                <div className='location'><h5>Location</h5><input placeholder='Search place' type='text'></input></div>
                <div  className='pick'><h5>Pick-Up-Date</h5><input type='date'></input></div>
                <div className='return'><h5>Return Date</h5><input type='date'></input></div>
                <div className='submit'><button>SUBMIT</button></div>
            </div>
            <div className='backgroundcar' > <img src={bg} className='bg-img' alt='' data-speed="7"></img></div>  
        </div>
    </div>
  )
}

export default Homepagecontent