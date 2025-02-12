import { memo } from 'react';

import { classNames } from '@/shared/libs';
import { GitOctopus, IntroduceImg } from '@/shared/ui';

import cls from './Introduce.module.scss';

interface IntroduceProps extends React.HTMLProps<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

const Introduce = memo((props: IntroduceProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <section
      id="home"
      className={classNames(cls.introduce, {}, [className])}
      {...otherProps}>
      <GitOctopus
        target="_blank"
        aria-label="View source on GitHub"
        rel="noreferrer"
        title="View source on GitHub"
      />
      <h1 className={cls.descriptionBox}>
        <span className={cls.introduceMe}>Hi, I&rsquo;m Roman</span>
        <span className={cls.introduceMe}>Web Developer</span>
        <p className={cls.descriptionMe}>
          I am currently search ability to get works at the interesting project as a
          Web Developer.
        </p>
        <div className={cls.linksToSocial}>
          <a
            href="https://www.instagram.com/roman_klimashenko/"
            target="_blank"
            className={cls.link}
            title="Instagram">
            <img
              className={cls.imgOfLink}
              src="/socials/instagram.svg"
              width={50}
              height={50}
              alt="Instagram Roman Klymashenko"
            />
          </a>
          <a
            href="https://github.com/semklim"
            target="_blank"
            className={cls.link}
            title="gitHub">
            <img
              className={cls.imgOfLink}
              src="/socials/github.svg"
              width={50}
              height={50}
              alt="gitHub semklim"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/roman-klymashenko/"
            target="_blank"
            className={cls.link}
            title="LinkedIn">
            <img
              className={cls.imgOfLink}
              src="/socials/linkedin.svg"
              width={50}
              height={50}
              alt="LinkedIn Roman Klymashenko"
            />
          </a>
          <a
            href="https://t.me/semklim/"
            target="_blank"
            className={cls.link}
            title="Telegram">
            <img
              className={cls.imgOfLink}
              src="/socials/telegram.svg"
              width={50}
              height={50}
              alt="Telegram semklim"
            />
          </a>
        </div>
        <div className={cls.getResume}>
          <a
            href="/Web-dev CV Roman Klymashenko.pdf"
            download="Web Developer CV Roman Klymashenko">
            Resume
          </a>
        </div>
      </h1>
      <div className={cls['svg-wrapper']}>
        <IntroduceImg />
      </div>
      {children}
    </section>
  );
});

export default Introduce;
