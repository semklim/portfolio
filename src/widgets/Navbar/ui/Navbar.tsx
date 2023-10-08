/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import { HamburgerButton, ThemeSwitcher } from '@/features';
import react from '@/shared/assets/techStack/React.svg';
import { classNames } from '@/shared/libs';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const closeMenuOn = ['nav__button', 'nav__link'];

const Navbar = memo(({ className }: NavbarProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => {
    const res = !isOpened;
    setIsOpened((prev) => !prev);
    if (res) {
      document.addEventListener('click', function clickOutMenu(e: MouseEvent) {
        const { className: currentClass } = e.target as HTMLElement;
        if (!/(nav__buttons|btn-hamburger)/g.test(currentClass)) {
          setIsOpened(false);
          document.removeEventListener('click', clickOutMenu);
        }
      });
    }
  };

  const closeMenu = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    closeMenuOn.forEach((currentClass) => {
      if (target.className.includes(currentClass)) {
        setIsOpened(!isOpened);
      }
    });
  };

  return (
    <header className={classNames(cls.header, {}, [className])}>
      <nav className={cls.nav}>
        <div className={cls.nav__logo}>
          <h1>
            <Link to="/">
              <img src={react} alt="react" width="50" height="50" />
            </Link>
          </h1>
        </div>
        <ul className={classNames(cls.nav__buttons, { [cls.show__nav_buttons]: isOpened })} onClick={closeMenu}>
          <li className={cls.nav__button}>
            <Link className={cls.nav__link} to="/">
              Home
            </Link>
          </li>
          <li className={cls.nav__button}>
            <a className={cls.nav__link} href="#about">
              About
            </a>
          </li>
          <li className={cls.nav__button}>
            <a className={cls.nav__link} href="#services">
              Services
            </a>
          </li>
          <li className={cls.nav__button}>
            <a className={cls.nav__link} href="#projects">
              Projects
            </a>
          </li>
          <li className={cls.nav__button}>
            <a className={cls.nav__link} href="#contact">
              Contact
            </a>
          </li>
          <li className={classNames(cls.nav__button, {}, ['switcher'])}>
            <ThemeSwitcher />
          </li>
        </ul>
        <HamburgerButton isOpened={isOpened} onClick={toggle} />
      </nav>
    </header>
  );
});

export { Navbar };
