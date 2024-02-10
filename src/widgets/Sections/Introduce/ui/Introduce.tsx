import { memo } from 'react';

import { GitOctopus } from '@/shared';
import { classNames } from '@/shared/libs';
import { IntroduceImg } from '@/shared/ui/IntroduceImg';

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
        <span className={cls.introduceMe}>Front End Developer</span>
        <p className={cls.descriptionMe}>
          I am currently search ability to get works at the interesting project as a
          Front-End Developer.
        </p>
        <div className={cls.linksToSocial}>
          <a
            href="https://www.instagram.com/roman_klimashenko/"
            className={cls.link}
            title="Instagram">
            <img
              className={cls.imgOfLink}
              src="/socials/instagram.svg"
              width={40}
              height={40}
              alt="Instagram"
            />
          </a>
          <a href="https://github.com/semklim" className={cls.link} title="gitHub">
            <img
              className={cls.imgOfLink}
              src="/socials/github.svg"
              width={40}
              height={40}
              alt="gitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/roman-klymashenko/"
            className={cls.link}
            title="LinkedIn">
            <img
              className={cls.imgOfLink}
              src="/socials/linkedin.svg"
              width={40}
              height={40}
              alt="linkedIn"
            />
          </a>
        </div>
        <div className={cls.getResume}>
          <a
            href="/Front-end CV Roman Klymashenko.pdf"
            download="Front-end CV Roman Klymashenko">
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
