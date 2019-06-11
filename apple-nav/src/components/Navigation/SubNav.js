import React from 'react'
import styled from 'styled-components'
import SubNavItem from './SubNavItem'
import data from '../../data'
const SubNavWrapper = styled.div`
  width: 100%;
  background: rgba(242,242,242,0.7);
  ul {
    margin: 0 3.4rem;
    padding: 0 4.9rem;
    list-style: none;
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`
class SubNav extends React.Component {
  state = {
    navData: data,
    subLinks: []
  }
  componentDidMount() {
    const { name } = this.props.match.params;
    this.setState(prevState => ({
      ...prevState,
      subLinks: this.getCurrentSubLinks(name)
    }))
  }
  componentWillReceiveProps(nextProps) {
    const { name } = nextProps.match.params;
    if (this.props.match.params.name !== name ) {
      this.setState(prevState => ({
        ...prevState,
        subLinks: this.getCurrentSubLinks(name)
      }))
    }
   
  }
  getCurrentSubLinks = (name) => {
    const item = this.state.navData.find(data => data.name.toLowerCase() === name )
    return item ? item.subLinks : []

  }
  render() {
    return (
      <SubNavWrapper>
        <ul>
          {this.state.subLinks && this.state.subLinks.map((link, i) =>(
            <SubNavItem img={link.img} name={ link.name } key={`${link.img}${i}`}/>
          ))}
        </ul>
    </SubNavWrapper>
    )
  }
}


export default SubNav;