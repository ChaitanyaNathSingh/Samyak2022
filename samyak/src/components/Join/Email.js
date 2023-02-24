import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBarSpace from '../BaseComponents/NavBarSpace';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_a5xt44n', 'template_w7x148g', form.current, 'SRbHPun0G_wQLdZu_') // emailjs official account
    emailjs.send('service_hnlp0jp', 'template_c7ujukg', form, 'Kx2XUnBQJ2ciSewte') // emailjs backup account
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
        <NavBarSpace />
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    </>
  );
};