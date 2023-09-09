/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo, useState } from 'react';

import { HamburgerButton, ThemeSwitcher } from '@/features';
import react from '@/shared/assets/icons/react.svg';
import { classNames } from '@/shared/libs';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened((prev) => !prev);

  return (
    <header className={classNames(cls.header, {}, [className])}>
      <nav className={cls.nav}>
        <div className={cls.nav__logo}>
          <h1>
            <img src={react} alt="react" width="50" height="50" />
          </h1>
        </div>
        <ul className={classNames(cls.nav__buttons, { [cls.show__nav_buttons]: isOpened })}>
          <li className={cls.nav__button}>
            <a className={cls.nav__link} href="#">
              Home
            </a>
          </li>
          <li className={cls.nav__button}>
            <a href="#about">About</a>
          </li>
          <li className={cls.nav__button}>
            <a href="#services">Services</a>
          </li>
          <li className={cls.nav__button}>
            <a href="#projects">Projects</a>
          </li>
          <li className={cls.nav__button}>
            <a href="#contact">Contact</a>
          </li>
          <li className={cls.nav__button}>
            <ThemeSwitcher />
          </li>
        </ul>
        <HamburgerButton isOpened={isOpened} onClick={toggle} />
      </nav>
    </header>
  );
});

export { Navbar };
