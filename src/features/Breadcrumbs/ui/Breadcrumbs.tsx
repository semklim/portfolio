import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '@/shared/assets/icons/breadcrumbsArrow.svg';
import homeIcon from '@/shared/assets/icons/home.svg';
import { classNames } from '@/shared/libs';

import { createBreadcrumbs, PathData } from '../api/createArrayLinks';
import cls from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
  className?: string;
  basePath?: string;
}

const Breadcrumbs = ({ className, basePath = '' }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  const arrOfPaths: PathData[] = createBreadcrumbs(pathname, basePath);
  return (
    <div className={classNames(cls.breadcrumbs, {}, [className])}>
      <Link to="/" preventScrollReset aria-label="home">
        <img src={homeIcon} className={cls.link_breadcrumbs_icon} alt="Home page" width={20} />
        <span>Home</span>
        <ArrowIcon className={cls.link_breadcrumbs_arrow} width={20} height={20} />
      </Link>
      {arrOfPaths.map(({ title, link }, i) => {
        if (i < arrOfPaths.length - 1) {
          return (
            <Link key={title} to={link} className={cls.currentPage} aria-label={title}>
              {title}
              <ArrowIcon className={cls.link_breadcrumbs_arrow} width={20} height={20} />
            </Link>
          );
        }
        return (
          <Link key={title} to={link} className={cls.currentPage} aria-label={title}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export { Breadcrumbs };
