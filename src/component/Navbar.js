import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { categoryFilter, clearFilter } from '../features/productSlice'

import { Logo_circle } from './index'
import { BsHandbag } from 'react-icons/bs'
import Wrapper from '../assets/style/Navbar'


const Navbar = () => {
  const { cartItems } = useSelector((store) => store.cart)
  const [showNavbar, setShowNavbar] = useState(false)
  const dispatch = useDispatch()
  const toggleBtn = () => {
    setShowNavbar(!showNavbar)
  }

  const navCategory = (category) => {
    dispatch(categoryFilter(category))
    setShowNavbar(false)
  }

  const nevLink = [
    {
      value: "商店",
      category: 'all'
    },
    {
      value: "相機",
      category: 'camera'
    },
    {
      value: "收音機",
      category: 'radio'

    },
    {
      value: "家用電話",
      category: 'telephone'

    },
    {
      value: "打字機",
      category: 'typewriter'

    },
  ]



  return <Wrapper className='navbar'>
    <div className='togglebox' onClick={toggleBtn}>
      <div className={showNavbar ? 'toggle show' : 'toggle'} ></div>
    </div>
    <NavLink to='/' className='nav__logo' onClick={() => dispatch(clearFilter())} ><Logo_circle /></NavLink>
    <ul className={showNavbar ? 'nav__links show' : 'nav__links'}>
      {
        nevLink.map((item, index) => {
          return <li className='nav__link' key={index}><NavLink to='/allProducts'
            className='nav__title'
            onClick={() => navCategory(item.category)}
          >{item.value}</NavLink></li>
        })
      }
    </ul>
    <NavLink to='cart' className='nav__icon' data-num={cartItems.length}><BsHandbag /></NavLink>
  </Wrapper >
}



export default Navbar


