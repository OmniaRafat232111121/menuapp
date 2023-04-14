import React from 'react'
import './Header.css'
import menuapp from "../../assets/menuapp.jpeg"
import HeaderButton from '../HeaderButton/HeaderButton'
const Header = () => {
  return (
    <>
    <header >
    <div className='container'>
    <div className='row'>
     <div className='col-md-6 col-lg-6'>
        <h2>Food App</h2>

     </div>
     <div className='col-md-6 col-lg-6'>
    <HeaderButton/>
     </div>
    </div>

    </div>
    </header>
    <div className='main'>
      <img src={menuapp} title="header image"/>

    </div>
    </>
  
  )
}

export default Header
