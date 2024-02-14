/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, FormEventHandler, useRef, useState } from 'react';
import { classNames } from '@/shared/libs';
import { ButtonPushable, FormInput } from '@/shared/ui';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import cls from './ContactForm.module.scss';

interface ContactFormProps {
  className?: string;
}

interface ContactFormElements {
  name: HTMLInputElement;
  email: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
  submitButton: HTMLButtonElement;
}

const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const ContactForm: FC<ContactFormProps> = (props) => {
  const { className } = props;
  const form = useRef<ContactFormElements & HTMLFormElement>(null);
  const [showLoader, setShowLoader] = useState(false);

  const sendEmail: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setShowLoader(true);

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
        (result) => {
          Swal.fire({
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            toast: true,
            background: '#151515',
            padding: '0.5rem',
            color: 'white',
            icon: 'success',
            title: 'Success',
            text: 'You are send email. Please wait for answer.',
          });

          form.current!.reset();
          setShowLoader(false);
        },
        (error) => {
          Swal.fire({
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            toast: true,
            background: '#151515',
            padding: '0.5rem',
            color: 'white',
            icon: 'error',
            title: 'Something going wrong. Please try later.',
            text: `${error.text}`,
          });

          setShowLoader(false);
        },
      );
    }
  };

  return (
    <footer id="contact" className={classNames(cls.contactForm, {}, [className])}>
      <div className={cls['leading-loose']}>
        <form ref={form} onSubmit={sendEmail} className={cls.formEl}>
          <p className={cls.formEl_title}>Contact Form</p>
          <FormInput
            labelTxt="Full Name"
            labelFor="name"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            aria-label="Name"
            required
          />
          <FormInput
            labelTxt="Email"
            labelFor="email"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            aria-label="Email"
            required
          />
          <FormInput
            labelTxt="Subject"
            labelFor="subject"
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            aria-label="Subject"
            required
          />

          <div className={cls.wrapper_message}>
            <label className={cls.message_label} htmlFor="message">
              Message
            </label>
            <textarea
              className={cls.message_textarea}
              id="message"
              name="message"
              cols={14}
              rows={6}
              aria-label="Message"
              placeholder="Write me, your proposal"
              required
            />
          </div>

          <div className={cls.btn_submit}>
            <ButtonPushable
              name="submitButton"
              id="submitButton"
              btnTxt="Send Message"
              loading={showLoader}
              disabled={showLoader}
              type="submit"
              aria-label="Send Message"
            />
          </div>
        </form>
      </div>
    </footer>
  );
};

export default ContactForm;
