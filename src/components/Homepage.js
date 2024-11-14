import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Homepagecontent from './Homepagecontent';

function Homepage() {
  return (
    <div>
          <div className='home-page'>
                 <div><Sidebar/></div> 
                <div>
                    <Header/>
                    <Homepagecontent/>
                </div>
              
          </div>
    </div>
  )
}

export default Homepage;