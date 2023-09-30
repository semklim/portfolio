import { motion } from 'framer-motion';
import { memo } from 'react';

import { ProjectCard } from '@/entities';
import { projects } from '@/shared/data/constants';
import { classNames } from '@/shared/libs';

import cls from './Projects.module.scss';

interface ProjectsProps {
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

const Projects = memo(({ className }: ProjectsProps) => {
  return (
    <section id="projects" className={classNames(cls.projects, {}, [className])}>
      <div className={cls.projectsWrapper}>
        <h2 className={cls.title}>Projects</h2>
        <div className={cls.subTitle}>
          <strong className={cls.subTitle__txt}>What I Built</strong>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          className={cls.projectsCard}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} className={classNames(cls.projectCard)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Projects;
