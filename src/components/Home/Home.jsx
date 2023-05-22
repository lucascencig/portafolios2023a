import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import Typical from 'react-typical'

import Nav from '../NavMenu/NavMenu';

import S from '../Home/Home.module.css';

export default function Home() {
  return (
    <div className={S.fondo}>

      <div className={S.nav}>
        <Nav />
      </div>
      {/* <img src={fondo} alt="" /> */}
      <div className={S.contenedor}>
        <div className={S.presentacion}>
          <span>Lucas Cencig</span>
          {/* <Typical
            loop={Infinity}
            wrapper="span"
            steps={["Lucas Cencig", 2000]}
          /> */}
          <Typical
            loop={Infinity}
            wrapper="h3"
            steps={["Full Stack Web Developer", 2000, "Specialized in", 2000, "Front-End", 2000]}
          />

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
