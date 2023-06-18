const navList = [
  "Explore Plans",
  "Therapy",
  "Medication",
  "Insurance",
  "About",
];

function Nav() {
  function renderList(listItem) {
    return (
      <li>
        <a className="main-nav-link" href="/">
          {listItem}
        </a>
      </li>
    );
  }

  return (
    <header className="header sticky">
      <a href="#">
        <img
          src="/src/assets/celebral-logo.svg"
          alt="Cerebral logo"
          className="logo"
        />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          {navList.map(renderList)}
          <li>
            <a className="main-nav-link" href="/login">
              Login
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="/login">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
