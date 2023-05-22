import React from 'react';

import fotocv from '../../utils/fotocvactualizada.jpeg';
import { Link } from 'react-router-dom';
import Nav from '../NavMenu/NavMenu';

import S from '../Curriculum/curriculum.module.css'

export default function Curriculum() {
  return (
    <div className={S.contenedor}>
      <Nav />
      <div className={S.curriculum}>
        <img src={fotocv} alt="fotocv" />
        <button>
          <a href="https://docs.google.com/document/d/13Aylp-49ej0K64JxxTOs3nOy8vc2qIPY/edit" target='_blank'>Download CV</a>
        </button>
        <div className={S.data}>
          <div className={S.secciones}>
            <h2>Full name:</h2>
            <p>Lucas Ezequiel Cencig</p>

          </div>


          <div className={S.personalData}>
            <h2>Personal data:</h2>
            <p>
              I am a person with high learning capacity, teamwork and good
              communication. I work with responsibility, dedication and
              perseverance.
            </p>
          </div>


          <div className={S.workExp}>
            <h2>Work experience:</h2>
            <h3>Click Experts S.A.</h3>
            <p>Development of applications for national and international clients.
              Tool and website maintenance
              Back-End and Front-End Development.</p>
            <br />
            <h3>Web Freelance Developer</h3>
            <p>Front end web development independent (Freelance).</p>
          </div>


          <div className={S.formation}>
            <h2>Formation and studies:</h2>
            <p>
              I have successfully passed a bootcamp called "Soy Henry" at a
              full-time level, developing myself as a Full Stack Developer, carrying
              out both individual and group projects which gave me the skills and
              knowledge to carry out work of all kinds, learning the languages
              mentioned above to adapt to the job market, placing a lot of
              emphasis on JavaScript and both Front-End and Back-End frameworks.
            </p>
          </div>


          <div className={S.contactData}>
            <h2>Aditional Data:</h2>
            <p>
              <u> Nationality:</u> Argentina

              <u> Location:</u> Hurlingham.
              <u> Town:</u> Buenos Aires.



            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
