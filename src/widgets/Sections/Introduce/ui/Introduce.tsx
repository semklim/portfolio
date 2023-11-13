import { memo } from 'react';

import { GitOctopus } from '@/shared';
import gitHub from '@/shared/assets/socials/github.svg';
import instagram from '@/shared/assets/socials/instagram.svg';
import linkedin from '@/shared/assets/socials/linkedin.svg';
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
    <section id="home" className={classNames(cls.introduce, {}, [className])} {...otherProps}>
      <GitOctopus target="_blank" aria-label="View source on GitHub" rel="noreferrer" title="View source on GitHub" />
      <h1 className={cls.descriptionBox}>
        <span className={cls.introduceMe}>Hi, I&rsquo;m Roman</span>
        <span className={cls.introduceMe}>Front End Developer</span>
        <p className={cls.descriptionMe}>
          I am currently search ability to get works at the intresting project as a Front-End Developer.
        </p>
        <div className={cls.linksToSocial}>
          <a href="https://www.instagram.com/roman_klimashenko/" className={cls.link} title="Instagram">
            <img className={cls.imgOfLink} src={instagram} width={40} height={40} alt="Instagram" />
          </a>
          <a href="https://github.com/semklim" className={cls.link} title="gitHub">
            <img className={cls.imgOfLink} src={gitHub} width={40} height={40} alt="gitHub" />
          </a>
          <a href="https://www.linkedin.com/in/roman-klymashenko-a2a483238/" className={cls.link} title="LinkedIn">
            <img className={cls.imgOfLink} src={linkedin} width={40} height={40} alt="linkedIn" />
          </a>
        </div>
        <div className={cls.getResume}>
          <a href="https://docs.google.com/document/d/17pzcuF4Qx3HiF_p7B355-31J8d9tOqwz/edit?usp=sharing&ouid=108059482767559103522&rtpof=true&sd=true">
            CV / Resume
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
