import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.li`
  display: inline-block;
  vertical-align: top;
  padding: 0.8rem 0;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
`
export default function subNavItem({ name, img }) {
  const slugName = name.toLowerCase().replace(/ /g, "-");
  return (
    <Wrapper>
      <NavLink exact to={slugName}>
        <img src={img} alt="" />
        <span>{slugName}</span>
      </NavLink>
    </Wrapper>
  )
}