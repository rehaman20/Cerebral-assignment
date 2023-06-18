/* eslint-disable react/prop-types */
function Nav(props) {
  function renderListItem(listItem) {
    return (
      <li>
        <a href="#" className="footer-link">
          {listItem}
        </a>
      </li>
    );
  }

  return (
    <nav className="nav-col">
      <p className="footer-heading">{props.title}</p>
      <ul className="footer-nav">{props.list.map(renderListItem)}</ul>
    </nav>
  );
}

export default Nav;
