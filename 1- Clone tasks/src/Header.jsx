import './header.css';
import NavLinks from './NavLinks.jsx';

function Header() {
  return (
    <header>
      <img src="/logo.svg" alt="logo" id="logo" />
      <NavLinks />
    </header>
  );
}

export default Header;
