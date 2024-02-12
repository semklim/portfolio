import { FC } from 'react';

import { classNames } from '@/shared';

import cls from './NavLinks.module.scss';
import { LinksToSection } from '../Navbar';
import { Link as LinkRouter, Location } from 'react-router-dom';
import { Link } from 'react-scroll';

interface NavLinksProps {
  links: LinksToSection[];
  location?: Location;
  offsetScroll?: number;
  className?: string;
  handleOnClick?: () => void;
}

const NavLinks: FC<NavLinksProps> = (props) => {
  const { className, links, location, offsetScroll = 0, handleOnClick } = props;

  if (!location || location.pathname === '/') {
    return (
      <>
        {links.map((link) => (
          <li className={classNames(cls.nav__button, {}, [className])} key={link.id}>
            <Link
              className={classNames(cls.nav__link)}
              activeClass={cls.active}
              offset={offsetScroll}
              spy={true}
              smooth={true}
              to={link.id}
              onClick={handleOnClick}>
              {link.name}
            </Link>
          </li>
        ))}
      </>
    );
  } else {
    return (
      <li className={cls.nav__button}>
        <LinkRouter className={classNames(cls.nav__link, {}, [cls.active])} to="..">
          Go Back
        </LinkRouter>
      </li>
    );
  }
};

export { NavLinks };
