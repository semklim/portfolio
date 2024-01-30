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
        itemScope
        itemType="http://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
          <Link to="/" preventScrollReset aria-label="home" title="Home" itemProp="item">
            <img
              src={homeIcon}
              className={cls.link_breadcrumbs_icon}
              alt="Home page"
              width={20}
            />
            <span itemProp="name">Home</span>
            <meta itemProp="position" content="0" />
            <ArrowIcon className={cls.link_breadcrumbs_arrow} width={20} height={20} />
          </Link>
        </li>

        {paths.map(({ title, link }, i) => {
          const projectName = projects.find((el) => el.id === title);

          if (i < paths.length - 1) {
            return (
              <li
                itemProp="itemListElement"
                itemScope
                itemType="http://schema.org/ListItem"
                key={title}>
                <Link
                  to={link}
                  title={projectName?.title}
                  itemProp="item"
                  className={cls.currentPage}
                  aria-label={projectName?.title}>
                  <span itemProp="name">{projectName?.title}</span>
                  <meta itemProp="position" content={`${i + 1}`} />
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
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
              key={title}>
              <div
                title={projectName?.title}
                itemProp="item"
                className={cls.currentPage}
                aria-label={projectName?.title}>
                <span itemProp="name">{projectName?.title}</span>
                <meta itemProp="position" content={`${i + 1}`} />
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Breadcrumbs };
