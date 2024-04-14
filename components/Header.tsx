export function Header(){
  const Nav = [
    {
      "text": "Home",
      "href": "/"
    },
    {
      "text": "About",
      "href": "/about"
    },
    {
      "text": "Activities",
      "href": "/activities"
    },
    {
      "text": "Blogs",
      "href": "/blogs"
    },
    {
      "text": "Works",
      "href": "/works"
    },
    {
      "text": "SNS",
      "href": "/sns"
    },
    {
      "text": "Contact",
      "href": "/contact"
    }
  ];

  return (
    <header>
      {/* logo */}
      <div>

      </div>
      {/* Global nav */}
      <nav class="global-nav">
        <ul>
          {Nav.map(elem=>(
            <li><a href={elem.href}></a>{elem.text}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}