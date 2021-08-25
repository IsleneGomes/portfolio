import React from 'react';
import github from '../images/Octocat.png';
import linkedin from '../images/linkedin1.png';
import pessoal from '../images/pessoal.jpg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header-card">
      <img className="img-pessoal" src={pessoal} alt="logo comum de </>" width="90px" />
      <nav className="nav-header">
        <Link to="/">
          <button type="button">HOME</button>
        </Link>
        <Link to="/curriculo">
        <button type="button">CURRICULO</button>
        </Link>
        <Link to="/projetos">
          <button type="button">PROJETOS</button>
        </Link>
        <Link to="/contato">
          <button type="button">CONTATO</button>
        </Link>
      </nav>
      <section className="link-header">
        <a href="https://github.com/IsleneGomes" target="_blank" rel="noreferrer">
            <img className="img-github" src={github} alt="logotipo do github" width="60px" />
        </a>
        <a href="https://www.linkedin.com/in/islene-dos-santos-gomes-fernandes-76899645/" target="_blank" rel="noreferrer">
            <img className="img-linkedin" src={linkedin} alt="logotipo do linkedin" width="60px" />
        </a>
      </section>
    </header>
  )
}
