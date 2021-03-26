import React, { useState } from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import Logo from '../../images/fourpercent-logo.png'
import './Nav.css'
const Nav = styled.nav`
  top: 0;
  /* width:100%; */
  height: 55px;
  /* border-bottom: 2px solid #f1f1f1; */
  padding:0 20px;
  position: fixed;
  background: transparent;
  display:flex;
  justify-content: space-between;
  z-index: 32;
`


function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const changeNavColor = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false);
        };
    };
    window.addEventListener('scroll', changeNavColor);
    return (
        <nav className={navbar ? 'header active' : 'header'} >
            {/* <div className="logo" ></div> */}
            <img style={{zIndex: '1', marginTop: '10px'}} src={Logo} className="logo" />
            <Burger />

        </nav>

    )
}

export default Navbar