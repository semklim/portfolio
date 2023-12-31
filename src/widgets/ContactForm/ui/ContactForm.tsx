/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { classNames } from '@/shared/libs';
import { ButtonPushable } from '@/shared/ui/ButtonPushable/ButtonPushable';
import { FormInput } from '@/shared/ui/FormInput/FormInput';

import cls from './ContactForm.module.scss';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const { className } = props;
  return (
    <footer id="contact" className={classNames(cls.contactForm, {}, [className])}>
      <div className={cls['leading-loose']}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={cls.formEl}>
          <p className={cls.formEl_title}>Contact Form</p>
          <FormInput
            labelTxt="Full Name"
            labelFor="name"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            aria-label="Name"
          />
          <FormInput
            labelTxt="Email"
            labelFor="email"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            aria-label="Email"
          />
          <FormInput
            labelTxt="Subject"
            labelFor="subject"
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            aria-label="Subject"
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
            />
          </div>

          <div className={cls.btn_submit}>
            <ButtonPushable btnTxt="Send Message" type="submit" aria-label="Send Message" />
          </div>
        </form>
      </div>
    </footer>
  );
};

export default ContactForm;
