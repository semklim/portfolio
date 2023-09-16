import { classNames } from '@/shared/libs';

import cls from './About.module.scss';

interface AboutProps {
  className?: string;
}

const techList = new Array(16).fill(1);

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
        {techList.map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className={cls.card}>
            <img
              className={cls.cardImg}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="Typescript"
            />
            <h4 className={cls.cardTitle}>Typescript</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export { About };
