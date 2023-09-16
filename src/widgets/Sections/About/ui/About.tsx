/* eslint-disable jsx-a11y/label-has-associated-control */
import { techStack } from '@/shared/data/constants';
import { classNames } from '@/shared/libs';

import cls from './About.module.scss';

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  return (
    <section id="about" className={classNames(cls.about, {}, [className])}>
      <h2 className={cls.title}>About Me</h2>
      <div className={cls.aboutMe}>
        <h3 className={cls.subTitle}>A bit of me</h3>
        <p className={cls.subTitleDescription}>
          I&rsquo;m a Front end developer with experience in designing new features from ideation to production. I take
          into consideration the user experience while writing reusable and efficient code. I passionately combine good
          design, technology, and innovation in all my projects, which I like to accompany from the first idea to
          release.
        </p>
      </div>
      <div className={cls.aboutTech}>
        <h3 className={cls.subTitle}>Technologies and Tools</h3>
        <p className={cls.subTitleDescription}>
          Using a combination of cutting-edge technologies and reliable open-source software I build user-focused,
          performant apps and websites for smartphones, tablets, and desktops.
        </p>
      </div>
      <div className={cls.cardsOfTech}>
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
      </div>
    </section>
  );
};

export { About };
