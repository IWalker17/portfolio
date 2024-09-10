import './../../styles/header.css';

function Header() {

  return (
    <>
      <header>
        <h1>
          <a href='/'>
            <span id="firsti">I</span>
            <span id="s">s</span>
            <span id="firsta">a</span>
            <span id="secondi">i</span>
            <span id="seconda">a</span>
            <span id="h">h</span>
            <span> </span>
            {/* <span id="space"> </span> */}
            <span id="w">W</span>
            <span id="thirda">a</span>
            <span id="l">l</span>
            <span id="k">k</span>
            <span id="e">e</span>
            <span id="r">r</span>
          </a>
        </h1>
        <nav id="nav-container">
          <ul>
            <li id='about'><a href='/about'>About</a></li>
            <li id='skills'><a href='/skills'>Skills</a></li>
            <li id='projects'><a href='/projects'>Projects</a></li>
            <li id='contact'><a href='/contact'>Contact</a></li>
            <li id='blog'><a href='/blog'>Blog</a></li>
          </ul>
      </nav>
      </header>
    </>
  );
}

export default Header;
