/* eslint-disable jsx-a11y/label-has-associated-control */
import { aboutMe, techStack } from '@/shared/data/constants';
import { classNames } from '@/shared/libs';

import cls from './About.module.scss';

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  return (
    <section id="about" className={classNames(cls.about, {}, [className])}>
      <h2 className={cls.title}>About Me</h2>
      {aboutMe.map(({ title, desc }) => {
        return (
          <section key={title} className={cls.subSectionTitle}>
            <h3 className={cls.subTitle}>{title}</h3>
            <p className={cls.subTitleDescription}>{desc}</p>
          </section>
        );
      })}
      <section className={cls.cardsOfTech}>
        {techStack.map(({ name, link }) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={name} className={cls.card}>
            <input className={cls.cardCheckBox} type="radio" name="showTitle" id={`tech${name}`} />
            <label htmlFor={`tech${name}`}>
              <img className={cls.cardImg} src={link} alt={name} />
            </label>
            <h4 className={cls.cardTitle}>{name}</h4>
          </div>
        ))}
      </section>
    </section>
  );
};

export { About };
