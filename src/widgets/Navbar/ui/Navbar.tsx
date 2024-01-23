/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link } from 'react-scroll';

import { HamburgerButton, ThemeSwitcher } from '@/features';
import react from '@/shared/assets/techStack/React.svg';
import { classNames } from '@/shared/libs';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

interface LinksToSection {
  name: string;
  id: string;
}

const links: LinksToSection[] = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
];

const Navbar = ({ className }: NavbarProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [offsetScroll, setOffsetScroll] = useState(-50);
  useEffect(() => {
    function checkSize() {
      if (window.outerWidth <= 900 && offsetScroll <= 50) {
        setOffsetScroll(2);
      } else {
        setOffsetScroll(-50);
      }
    }

    checkSize();
    window.addEventListener('resize', checkSize);

    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, [offsetScroll]);

  const showOrHideMenu = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <header className={classNames(cls.header, {}, [className])}>
      <nav className={cls.nav}>
        <div className={cls.nav__logo}>
          <h1>
            <LinkRouter to="/">
              <img src={react} alt="react" width="50" height="50" />
            </LinkRouter>
          </h1>
        </div>
        <ul className={classNames(cls.nav__buttons, { [cls.show__nav_buttons]: isOpened })}>
          {links.map((link) => (
            <li className={cls.nav__button} key={link.id}>
              <Link
                className={classNames(cls.nav__link)}
                activeClass={cls.active}
                offset={offsetScroll}
                spy={true}
                smooth={true}
                to={link.id}
                onClick={showOrHideMenu}>
                {link.name}
              </Link>
            </li>
          ))}
          <li className={classNames(cls.nav__button, {}, ['switcher'])}>
            <ThemeSwitcher clickOnSwitcher={showOrHideMenu} />
          </li>
        </ul>
        <div className={classNames(cls['nav-hamburger'], {}, ['display_none'])}>
          <HamburgerButton isOpened={isOpened} onClick={showOrHideMenu} />
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
