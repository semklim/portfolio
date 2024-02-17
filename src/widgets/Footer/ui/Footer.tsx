import { classNames } from '@/shared/libs';

import cls from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={classNames(cls.footer, {}, [className])}>
      <h4 className={cls.followMe}>Follow Me</h4>
      <div className={cls['social-links']}>
        <a
          href="https://www.instagram.com/roman_klimashenko/"
          target="_blank"
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
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
      <div className={cls.copyright}>
        <small>© {new Date().getFullYear()} Roman Kymashenko</small>
      </div>
    </footer>
  );
};

export { Footer };
