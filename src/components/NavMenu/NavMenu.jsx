import React from 'react';
import { Link } from 'react-router-dom';

import S from '../NavMenu/NavMenu.module.css';

export default function Nav() {
  return (
    <div className={S.contenedor}>
      <ul>
        <Link to={'/'}>
          <li>Home </li>
        </Link>

        <Link to={'/aboutme'}>
          <li>About me</li>
        </Link>

        <Link to={'/works'}>
          <li>Works</li>
        </Link>

        <Link to={'/skills'}>
          <li>Skills</li>
        </Link>

        <Link to={'/contact'}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
