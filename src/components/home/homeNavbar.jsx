import React from 'react'
import { NavbarContainer, NavbarLeft, NavbarRight, NavbarRightButton } from './style'

import earthIcon from '../../assets/earth-icon.svg'
import { Link } from 'react-router-dom'

function HomeNavbar() {
  return (
    <NavbarContainer>
      <NavbarLeft>EduManSim</NavbarLeft>
      <NavbarRight>
        <p style={{color: "black"}}>010-8384-1651</p>
        <NavbarRightButton $eng><img src={earthIcon} alt="" />ENG</NavbarRightButton>
        <Link to={"/login"} style={{textDecoration: "none"}}><NavbarRightButton style={{color: "white"}}>Log in</NavbarRightButton></Link>
      </NavbarRight>
    </NavbarContainer>
  )
}

export default HomeNavbar
