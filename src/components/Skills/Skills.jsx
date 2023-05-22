import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import S from '../Skills/Skills.module.css';
import js from '../../utils/canvaJs.png';
import Reactfoto from '../../utils/canvaReact.png';
import Reduxfoto from '../../utils/canvaRedux.png';
import htmlfoto from '../../utils/canvaHtml.png';
import csslogo from '../../utils/canvaCss.png';
import sasslogo from '../../utils/canvaSass.png';
import nodelogo from '../../utils/canvaNode.png';
import postgreslogo from '../../utils/canvaPsql.png';
import expresslogo from '../../utils/canvaExpress.png';
import bootstraplogo from '../../utils/canvaBoots.png';
import sequelizelogo from '../../utils/canvaSequelize.png';
import jshtcs from '../../utils/jshtcs.png';
import Nav from '../NavMenu/NavMenu';



export default function ImageGallery() {
  const [imageInfo, setImageInfo] = useState(null);

  const handleMouseOver = (info) => {
    setImageInfo(info);
  };

  const handleMouseOut = () => {
    setImageInfo(null);
  };

  return (
    <div className={S.contenedor}>
      <Nav />


      <div className={S.contentAll}>
        <div className={S.contentCarrousel}>
          <figure>
            <img src={js} />
          </figure>
          <figure>
            <img src={htmlfoto} />
          </figure>
          <figure>
            <img src={csslogo} />
          </figure>
          <figure>
            <img src={Reactfoto} />
          </figure>
          <figure>
            <img src={Reduxfoto} />
          </figure>
          <figure>
            <img src={nodelogo} />
          </figure>
          <figure>
            <img src={postgreslogo} />
          </figure>
          <figure>
            <img src={expresslogo} />
          </figure>

          <figure>
            <img src={sequelizelogo} />
          </figure>
        </div>
      </div>

      <div className={S.centerSkills}>
        <h2 className={S.titleSoftware}>Software Skills</h2>
        <div className={S.skillbox}>
          <p>JavaScript</p>
          <p className={S.porcetaje}>90%</p>
          <div className={S.skill}>
            <div className={S.skillLevel} style={{ width: '90%' }}></div>
          </div>

          <p>Html5</p>
          <p className={S.porcetaje}>90%</p>
          <div className={S.skill}>
            <div className={S.skillLevel} style={{ width: '90%' }}></div>
          </div>

          <p>Css3</p>
          <p className={S.porcetaje}>90%</p>
          <div className={S.skill}>
            <div className={S.skillLevel} style={{ width: '90%' }}></div>
          </div>

          <p>React Js</p>
          <p className={S.porcetaje}>80%</p>
          <div className={S.skill}>
            <div className={S.skillLevel} style={{ width: '80%' }}></div>
          </div>

          <p>Redux</p>
          <p className={S.porcetaje}>70%</p>
          <div className={S.skill}>
            <div className={S.skillLevel} style={{ width: '70%' }}></div>
          </div>

          <p>Node Js</p>
          <p className={S.porcetaje}>70%</p>
          <div className={S.skill}>
            <div className={S.skillLevel} style={{ width: '70%' }}></div>
          </div>

          <p>Express</p>
          <p className={S.porcetaje}>75%</p>
          <div className={S.skill}>
            <div className={S.skillLevel} style={{ width: '75%' }}></div>
          </div>

          <p>PostgreSQL</p>
          <p className={S.porcetaje}>80%</p>
          <div className={S.skill}>
            <div className={S.skillLevel} style={{ width: '80%' }}></div>
          </div>

          <p>Sequelize</p>
          <p className={S.porcetaje}>80%</p>
          <div className={S.skill}>
            <div className={S.skillLevel} style={{ width: '80%' }}></div>
          </div>


        </div>
        <p className={S.aclaracion}>
          I am constantly learning with the mentioned technologies to
          professionalize myself even more every day
        </p>
        <div className={S.espacio}></div>
      </div>
    </div>
  );
}

// export default function Skills() {
//   return (
//     <div className={S.contenedor}>
//       <Nav />

//       <div className={S.contentAll}>
//         <div className={S.contentCarrousel}>
//           <figure>
//             <img src={js} />
//           </figure>
//           <figure>
//             <img src={htmlfoto} />
//           </figure>
//           <figure>
//             <img src={csslogo} />
//           </figure>
//           <figure>
//             <img src={Reactfoto} />
//           </figure>
//           <figure>
//             <img src={Reduxfoto} />
//           </figure>
//           <figure>
//             <img src={nodelogo} />
//           </figure>
//           <figure>
//             <img src={postgreslogo} />
//           </figure>
//           <figure>
//             <img src={expresslogo} />
//           </figure>

//           <figure>
//             <img src={sequelizelogo} />
//           </figure>
//         </div>
//       </div>
// {/*
//       <div className={S.centerSkills}>
//         <h2>Software Skills</h2>
//         <div className={S.skillbox}>
//           <p>JavaScript</p>
//           <p className={S.porcetaje}>90%</p>
//           <div className={S.skill}>
//             <div className={S.skillLevel} style={{ width: '90%' }}></div>
//           </div>

//           <p>Html5</p>
//           <p className={S.porcetaje}>90%</p>
//           <div className={S.skill}>
//             <div className={S.skillLevel} style={{ width: '90%' }}></div>
//           </div>

//           <p>Css3</p>
//           <p className={S.porcetaje}>85%</p>
//           <div className={S.skill}>
//             <div className={S.skillLevel} style={{ width: '85%' }}></div>
//           </div>

//           <p>React Js</p>
//           <p className={S.porcetaje}>80%</p>
//           <div className={S.skill}>
//             <div className={S.skillLevel} style={{ width: '80%' }}></div>
//           </div>

//           <p>Redux</p>
//           <p className={S.porcetaje}>70%</p>
//           <div className={S.skill}>
//             <div className={S.skillLevel} style={{ width: '70%' }}></div>
//           </div>

//           <p>Node Js</p>
//           <p className={S.porcetaje}>70%</p>
//           <div className={S.skill}>
//             <div className={S.skillLevel} style={{ width: '70%' }}></div>
//           </div>

//           <p>Express</p>
//           <p className={S.porcetaje}>75%</p>
//           <div className={S.skill}>
//             <div className={S.skillLevel} style={{ width: '75%' }}></div>
//           </div>

//           <p>PostgreSQL</p>
//           <p className={S.porcetaje}>65%</p>
//           <div className={S.skill}>
//             <div className={S.skillLevel} style={{ width: '65%' }}></div>
//           </div>

//           <p>Sequelize</p>
//           <p className={S.porcetaje}>70%</p>
//           <div className={S.skill}>
//             <div className={S.skillLevel} style={{ width: '70%' }}></div>
//           </div>


//         </div>
//         <p className={S.aclaracion}>
//           I am constantly learning with the mentioned technologies to
//           professionalize myself even more every day
//         </p>
//         <div className={S.espacio}></div>
//       </div> */}
//     </div>
//   );
// }
