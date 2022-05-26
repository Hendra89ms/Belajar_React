const NavBar = ({ action }) => {
  const [page, setPage] = action;

  return (
    <nav className="navbar">
      <h1 className="brand">Jvalley</h1>

      <menu className="menu">
        <a
          className="menu_item"
          href="#home"
          onClick={() => {
            setPage("home");
          }}
        >
          Home
        </a>
        <a
          className="menu_item"
          href="#about"
          onClick={() => {
            setPage("about");
          }}
        >
          About
        </a>
        <a
          className="menu_item"
          href="#contact"
          onClick={() => {
            setPage("contact");
          }}
        >
          Contact
        </a>
        <div
          className="menu_item"
          href="#register"
          onClick={() => {
            setPage("register");
          }}
        >
          Register
        </div>
      </menu>
    </nav>
  );
};

export default NavBar;
