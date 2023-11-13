import gitHub from '@/shared/assets/socials/github.svg';
import instagram from '@/shared/assets/socials/instagram.svg';
import linkedin from '@/shared/assets/socials/linkedin.svg';
import { classNames } from '@/shared/libs';

import cls from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={classNames(cls.footer, {}, [className])}>
      <h5 className={cls.followMe}>Follow Me</h5>
      <div className={cls['social-links']}>
        <a
          href="https://www.instagram.com/roman_klimashenko/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram">
          <img className={cls.imgOfLink} src={instagram} width={40} height={40} alt="Instagram" />
        </a>
        <a href="https://github.com/semklim" target="_blank" rel="noopener noreferrer" title="gitHub">
          <img className={cls.imgOfLink} src={gitHub} width={40} height={40} alt="gitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/roman-klymashenko-a2a483238/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn">
          <img className={cls.imgOfLink} src={linkedin} width={40} height={40} alt="linkedIn" />
        </a>
      </div>
      <div className={cls.copyright}>
        <small>© 2023 Roman Kymashenko</small>
      </div>
    </footer>
  );
};

export { Footer };
