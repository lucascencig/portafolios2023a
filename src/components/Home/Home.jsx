import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


import Nav from '../NavMenu/NavMenu';

import S from '../Home/Home.module.css';

export default function Home() {
  return (
    <div className={S.fondo}>
      <div className={S.nav}>
        <Nav />
      </div>

      <div className={S.contenedor}>
        <div className={S.presentacion}>
          <h2 className={S.presentacionNombre}>Lucas Cencig</h2>
          <h3 className={S.presentacionfull}>Full Stack Web Developer</h3>
          <p className={S.presentacionspecial}>Specialized in</p>
          <h3 className={S.presentacionfront}>Front-end</h3>

        </div >

        <div className={S.curriculum}>
          <Link to={'/curriculum'}>
            <button className={S.buttonDos}>See my Resume.</button>
          </Link>
        </div>


      </div>
      <div className={S.footer}>

        <h3>You can find me too in:</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/lucas-cencig/"><FaLinkedin className={S.linke} /> LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/lucascencig"><FaGithub className={S.github} /> GitHub</a>
          </li>

        </ul>
      </div>
    </div>
  );
}
