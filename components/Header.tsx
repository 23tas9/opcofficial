export function Header() {
  const Nav = [
    {
      "text": "Home",
      "href": "/",
    },
    {
      "text": "Activities",
      "href": "/activities",
    },
    {
      "text": "Works",
      "href": "/works",
    },
    {
      "text": "Blogs",
      "href": "/blogs",
    },
    {
      "text": "Contact",
      "href": "/contact",
    },
  ];

  return (
    <header className="header">
      <div className="header-wrapper">
        {/* logo */}
        <a className="logo" href="/">
          <img
            className="official-icon__small"
            src="/images/icons/official_white.png"
          />
          <p>OECUPC</p>
        </a>
        {/* Global nav */}
        <nav className="global-nav">
          <ul className="global-nav__list">
            {Nav.map((elem) => (
              <li className="global-nav__item">
                <a href={elem.href}>{elem.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
