import React from 'react';
import { Link } from 'react-router-dom';
import henry from '../../utils/henry.png';
import certificado from '../../utils/certificado.jpg'
import S from '../AboutMe/aboutMe.module.css';
import Nav from '../NavMenu/NavMenu';
// import Typical from 'react-typical'
export default function Aboutme() {
  return (
    <div className={S.contenedor}>
      <Nav />
      <div className={S.aboutme}>

        <h3>About me</h3>
        <p className={S.text}>
          Some time ago, the creativity that Web developers gave to their designs today inspired me to a great extent and that is why I began my computer studies of programming and web development, with the intention of dedicating myself to what became my greatest personal passion. Thus, over time, I have been specializing and adapting to the most current styles on the market, in order to capture the interest of a greater volume of customers.
        </p>

        <p className={S.text}>
          I have successfully passed a bootcamp called "I am Henry" at a full-time level, developing myself as a Full Stack Developer, carrying out both individual and group projects which gave me the skills and knowledge to carry out work of all kinds, learning the languages ​​mentioned to adapt to the labor market, placing a lot of emphasis on JavaScript and both Front-End and Back-End frameworks.
        </p>
        <div className={S.fotos}>
          <a
            href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&gclid=Cj0KCQjwmPSSBhCNARIsAH3cYgbp8k3qX0aAAutG_YUaAkjcJZMpqsYLm3lzkgEMZaQB7DVnsv7OPQYaAoYQEALw_wcB"
            target="_blank"
          >

            <img className={S.logohenry} src={henry} alt="henry" />
          </a>
          <a href="https://certificates.soyhenry.com/cert?id=affeafc9-8586-4ae0-b86d-a13ff4aff5fc" target="_blank">
            <img className={S.certificado} src={certificado} alt="" />
          </a>
        </div>
        <p className={S.text}>
          {' '}
          <u>To summarize:</u> the technologies I use throughout this
          time are: "HTML 5", "CSS 3", "JAVASCRIPT", "REACT JS", "REDUX", "NODEJS", "SQL" AND "SECUALIZE". <br />
          In my learning path, I have carried out projects for clients and
          their respective items based on what the client demands and
          contributing ideas, using the best design tools
          adaptive (cell phones, tablets, notebooks, PC). Thus also like
          personal projects in order to practice. <br />
          My mentality is "always keep learning", not to let a day go by
          without learning something new and being able to advance in the quality of the sites
          websites I make, <u>providing greater customer satisfaction.</u>
        </p>
        <p className={S.text}>
          Do not hesitate to contact me if you want to know more about me or speak for what you need!
        </p>
        <Link to={'/contact'}>
          <button>CONTACT ME</button>
        </Link>
      </div>
    </div>
  );
}
