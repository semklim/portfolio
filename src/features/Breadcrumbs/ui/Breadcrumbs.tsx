import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '@/shared/assets/icons/breadcrumbsArrow.svg';
import homeIcon from '@/shared/assets/icons/home.svg';
import { classNames, breadcrumbsLinks, Paths } from '@/shared/libs';

import cls from './Breadcrumbs.module.scss';
import { projects } from '@/shared/data/constants';

interface BreadcrumbsProps {
  className?: string;
  basePath?: string;
}

const Breadcrumbs = ({ className, basePath = '' }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  const paths: Paths[] = breadcrumbsLinks(pathname, basePath);

  return (
    <nav>
      <ul
        className={classNames(cls.breadcrumbs, {}, [className])}
        itemscope
        itemtype="http://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <Link to="/" preventScrollReset aria-label="home" title="Home" itemprop="item">
            <img
              src={homeIcon}
              className={cls.link_breadcrumbs_icon}
              alt="Home page"
              width={20}
            />
            <span itemprop="name">Home</span>
            <meta itemprop="position" content="0" />
            <ArrowIcon className={cls.link_breadcrumbs_arrow} width={20} height={20} />
          </Link>
        </li>

        {paths.map(({ title, link }, i) => {
          const projectName = projects.find((el) => el.id === title);

          if (i < paths.length - 1) {
            return (
              <li
                itemprop="itemListElement"
                itemscope
                itemtype="http://schema.org/ListItem">
                <Link
                  key={title}
                  to={link}
                  title={projectName?.title}
                  itemprop="item"
                  className={cls.currentPage}
                  aria-label={projectName?.title}>
                  <span itemprop="name">{projectName?.title}</span>
                  <meta itemprop="position" content={`${i + 1}`} />
                  <ArrowIcon
                    className={cls.link_breadcrumbs_arrow}
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            );
          }

          return (
            <li
              itemprop="itemListElement"
              itemscope
              itemtype="http://schema.org/ListItem">
              <div
                key={title}
                title={projectName?.title}
                itemprop="item"
                className={cls.currentPage}
                aria-label={projectName?.title}>
                <span itemprop="name">{projectName?.title}</span>
                <meta itemprop="position" content={`${i + 1}`} />
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Breadcrumbs };
