import LogoBarber from '../../assets/images/logo.svg'
import Button from '../../components/button'
import { HeaderContainer, Logo, Nav, NavLink } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <Logo src={LogoBarber} alt="logo" />
      <Nav>
        <NavLink href="#">Sobre</NavLink>
        <NavLink href="#">Serviços</NavLink>
        <NavLink href="#">Contatos</NavLink>
      </Nav>
      <Button />
    </HeaderContainer>
  )
}

export default Header
