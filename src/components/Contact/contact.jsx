import React from 'react';
import { Link } from 'react-router-dom';
// import emailjs from '@emailjs/browser';

import S from '../Contact/contact.module.css';
// import { render } from 'react-dom/cjs/react-dom.production.min';

import Nav from '../NavMenu/NavMenu';
import { useState } from 'react';
import swal from 'sweetalert'

export default function Contact() {

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_tw3uceq', 'template_1mtq7xn', e.target, 'PX2xz_c4-WOfDD5o8').then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }
  const alert = function () {
    swal({
      title: "Mensaje Enviado.",
      icon: "success",
      button: "Ok."
    })
  }



  return (
    <div>
      <Nav />
      <div className={S.contenedor}>
        <div className={S.presentacion}>
          <span>¡Contact me!</span>

        </div>
        <div className={S.form}>
          {/* onSubmit={enviarEmail} */}
          <form method='POST' action="https://formsubmit.co/1f04588b510ca77adb56554a166f1310" onSubmit={alert}>
            <input
              required=""
              type="text"
              className={S.input}
              id="name"
              name='user_name'
              placeholder="Name"
            />
            <span className={S.highlight}></span>
            <span className={S.bar}></span>

            <input
              required=""
              type="text"
              className={S.input}
              id="email"
              name='user_email'
              placeholder="E-mail"
            />
            <span className={S.highlight}></span>
            <span className={S.bar}></span>

            <label className={S.labelMsg} htmlFor="">
              Message:
            </label>
            <textarea
              id="mensaje"
              cols="50"
              rows="10"
              name="user_message"
              placeholder="Text your message..."
            ></textarea>

            <button type="submit" value="send">Send the Email</button>
            <input type="hidden" name="_next" value="youtube" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </div>
  );
}
