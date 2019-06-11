import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavItemWrapper = styled.li`
  display: inline-block;
  position: relative;
  height: 44px;
  padding: 0.8rem 0;
  a {
    text-align: center;
    text-decoration: none;
     &:hover, &.active   {
      opacity: 0.65;
      transition: 0.2s ease-in-out;
    }
  }
`

export default function navItem({ link, children }) {
  return (
    <NavItemWrapper>
      <NavLink exact to={link}>
        { children }
      </NavLink>
    </NavItemWrapper>
  )
}