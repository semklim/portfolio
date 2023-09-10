import { memo } from 'react';

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
    <section className={classNames(cls.introduce, {}, [className])} {...otherProps}>
      <h1 className={cls.descriptionBox}>
        <span className={cls.introduceMe}>Hi, I&rsquo;m Roman</span>
        <span className={cls.introduceMe}>Front End Developer</span>
        <p className={cls.descriptionMe}>
          I am currently search ability to get works at the intresting project as a Front-End Developer.
        </p>
        <div className={cls.linksToSocial}>
          <a href="https://www.instagram.com/roman_klimashenko/" className={cls.link} title="Instagram">
            <img
              className={cls.imgOfLink}
              src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png"
              alt="Instagram"
            />
          </a>
          <a href="https://github.com/semklim" className={cls.link} title="gitHub">
            <img className={cls.imgOfLink} src="https://img.icons8.com/doodle/40/000000/github--v1.png" alt="gitHub" />
          </a>
          <a href="www.linkedin.com/in/roman-klymashenko-a2a483238" className={cls.link} title="LinkedIn">
            <img
              className={cls.imgOfLink}
              src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"
              alt="linkedIn"
            />
          </a>
        </div>
        <div className={cls.getResume}>
          <a href="https://docs.google.com/document/d/17pzcuF4Qx3HiF_p7B355-31J8d9tOqwz/edit?usp=sharing&ouid=108059482767559103522&rtpof=true&sd=true">
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

export { Introduce };
