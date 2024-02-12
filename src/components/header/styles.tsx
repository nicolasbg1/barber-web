import styled from 'styled-components'
import { headerbg } from '../../global-styles/colors-global'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${headerbg};
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 300px;
`

export const Logo = styled.img`
  height: 60px;
`

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  margin: 0 30px;
  &:hover {
    text-decoration: underline;
  }
`
