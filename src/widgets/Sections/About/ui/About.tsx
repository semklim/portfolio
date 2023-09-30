/* eslint-disable jsx-a11y/label-has-associated-control */
import { motion } from 'framer-motion';
import { memo } from 'react';
import LazyLoad from 'react-lazy-load';

import { aboutMe, techStack } from '@/shared/data/constants';
import { classNames } from '@/shared/libs';

import cls from './About.module.scss';

interface AboutProps {
  className?: string;
}

const animation = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, y: 100 },
};

const About = memo(({ className }: AboutProps) => {
  return (
    <section id="about" className={classNames(cls.about, {}, [className])}>
      <h2 className={cls.title}>About Me</h2>
      {aboutMe.map(({ title, desc }) => {
        return (
          <section key={title} className={cls.subSectionTitle}>
            <div className={cls.subTitle}>
              <strong className={cls.subTitle__txt}>{title}</strong>
            </div>
            <p className={cls.subTitleDescription}>{desc}</p>
          </section>
        );
      })}
      <section className={cls.cardsOfTech}>
        {techStack.map(({ name, link }) => (
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={name}
            className={cls.card}>
            <input className={cls.cardCheckBox} type="radio" name="showTitle" id={`tech${name}`} />
            <label htmlFor={`tech${name}`}>
              <LazyLoad>
                <img className={cls.cardImg} src={link} alt={name} />
              </LazyLoad>
            </label>
            <h4 className={cls.cardTitle}>{name}</h4>
          </motion.div>
        ))}
      </section>
    </section>
  );
});

export default About;
