import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>KSK Associates</h2>
        <p>Professional Services</p>
      </div>

      <ul>
        <li>
          <Link to="home" smooth duration={600} offset={-80} spy activeClass="active">
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth duration={600} offset={-80} spy activeClass="active">
            About
          </Link>
        </li>

        <li>
          <Link to="services" smooth duration={600} offset={-80} spy activeClass="active">
            Services
          </Link>
        </li>

        <li>
          <Link to="contact" smooth duration={600} offset={-80} spy activeClass="active">
            Contact
          </Link>
        </li>

        <li>
          <Link to="faq" smooth duration={600} offset={-80} spy activeClass="active">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;