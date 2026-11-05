import NavLinks from './NavLinks.jsx';

function Footer() {
  return (
    <footer>
      <NavLinks />

      <p>Copyright © 2023 Erased Disks Ltd.</p>

      <div className="footer-icons">
        <img src="/facebook-icon.png" alt="Facebook" />
        <img src="/instagram-icon.svg" alt="Instagram" />
        <img src="/twitter-icon.svg" alt="Twitter" />
      </div>
    </footer>
  );
}

export default Footer;