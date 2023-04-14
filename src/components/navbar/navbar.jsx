import "./navbar.css"

function NavBar() {
  return (
    <div>
      <nav className="sticky">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
