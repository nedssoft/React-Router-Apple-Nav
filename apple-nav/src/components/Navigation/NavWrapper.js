import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons'
import NavItem from './Nav'
library.add(fab, faShoppingBag, faSearch)
const NavWrapper = styled.nav`
  width: 100%;
  height: 44px;
  background: rgba(45,45,45,0.98);
  position: fixed;
  top: 0;
  left: 0;
    ul {
      list-style: none;
      max-width: 980px;
      margin: 0 auto;
      width: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  * {
    font-size: 1rem;
    color: white;
  }
`
export default function navigation() {
  return (
    <NavWrapper>
        <ul>
          <NavItem link="/"><FontAwesomeIcon icon={['fab', 'apple']} /></NavItem>
          <NavItem link="/mac">Mac</NavItem>
          <NavItem link="/ipad">iPad</NavItem>
          <NavItem link="/iphone">iPhone</NavItem>
          <NavItem link="/watch">Watch</NavItem>
          <NavItem link="/tv">TV</NavItem>
          <NavItem link="/music">Music</NavItem>
          <NavItem link="/support">Support</NavItem>
          <NavItem link="/search"><FontAwesomeIcon icon="search" /></NavItem>
          <NavItem link="/bag"><FontAwesomeIcon icon="shopping-bag" /></NavItem>
        </ul>

    </NavWrapper>
  )
}