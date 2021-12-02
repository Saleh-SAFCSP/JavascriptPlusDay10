const Navbar = ({ mainTitle, navbarList }) => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand fixed-top'>
      <div className='container-fluid'>
        <span className='navbar-brand mb-0 h1'>{mainTitle}</span>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link active' href='/'>
              {navbarList[0]}
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              {navbarList[1]}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
