import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '@/shared/assets/icons/breadcrumbsArrow.svg';
import homeIcon from '@/shared/assets/icons/home.svg';
import { classNames } from '@/shared/libs';

import { createBreadcrumbs, Paths } from '../api/createArrayLinks';
import cls from './Breadcrumbs.module.scss';
import { projects } from '@/shared/data/constants';

interface BreadcrumbsProps {
  className?: string;
  basePath?: string;
}

const Breadcrumbs = ({ className, basePath = '' }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  const paths: Paths[] = createBreadcrumbs(pathname, basePath);

  return (
    <div className={classNames(cls.breadcrumbs, {}, [className])}>
      <Link to="/" preventScrollReset aria-label="home">
        <img src={homeIcon} className={cls.link_breadcrumbs_icon} alt="Home page" width={20} />
        <span>Home</span>
        <ArrowIcon className={cls.link_breadcrumbs_arrow} width={20} height={20} />
      </Link>

      {paths.map(({ title, link }, i) => {
        const projectName = projects.find((el) => el.id === title);

        if (i < paths.length - 1) {
          return (
            <Link key={title} to={link} className={cls.currentPage} aria-label={title}>
              {projectName?.title}
              <ArrowIcon className={cls.link_breadcrumbs_arrow} width={20} height={20} />
            </Link>
          );
        }

        return (
          <Link key={title} to={link} className={cls.currentPage} aria-label={title}>
            {projectName?.title}
          </Link>
        );
      })}
    </div>
  );
};

export { Breadcrumbs };
