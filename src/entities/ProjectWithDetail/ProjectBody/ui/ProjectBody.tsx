/* eslint-disable jsx-a11y/media-has-caption */
import { HTMLAttributes, memo } from 'react';

import { ProjectsInfo } from '@/shared/data/constants';
import { classNames } from '@/shared/libs';
import { ButtonPushable } from '@/shared/ui/ButtonPushable/ButtonPushable';

import cls from './ProjectBody.module.scss';

interface ProjectBodyProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  project: ProjectsInfo;
}

const ProjectBody = memo(({ className, project }: ProjectBodyProps) => {
  const { title, desc, mainImg, video, bigVideo, techs, usedApi, architectPatterns, gitLink, deployed } = project;

  return (
    <section className={classNames(cls.projectWithDetail, {}, [className])}>
      <section className={cls.video}>
        <video
          src={bigVideo || video}
          controls
          poster={mainImg}
          controlsList="nodownload"
          title={`Video about ${title}`}
        />
      </section>
      <section className={cls.desc}>
        <div className={cls.desc_tech}>
          <div className={cls.techs}>
            <h2>Techs that use:</h2>
            <div className={cls.tech_imgs}>
              {techs.map((el) => (
                <div className={cls.tech_img} key={el}>
                  <img src={el} alt="" />
                </div>
              ))}
            </div>
          </div>
          <ul className={cls.apis}>
            <h2>API that use:</h2>
            {usedApi.length > 0 ? usedApi.map((el) => <li key={el}>-{el}</li>) : <li>Don&apos;t use</li>}
          </ul>
          <ul className={cls.arch}>
            <h2>Architect patterns that use:</h2>
            {architectPatterns.length > 0 ? (
              architectPatterns.map((el) => (
                <li key={el.name}>
                  <a href={el.link}>{el.name}</a>
                </li>
              ))
            ) : (
              <li>Don&apos;t use</li>
            )}
          </ul>
        </div>
        <div className={cls.desc_txt}>
          <article>
            <h2>About Project</h2>
            <p>{desc}</p>
          </article>
          <div className={cls.readyWorks}>
            <h2>Check this work on:</h2>
            <div className={cls.links}>
              <a href={gitLink}>
                <ButtonPushable btnTxt="GitHub" />
              </a>
              {deployed ? (
                <a href={deployed}>
                  <ButtonPushable btnTxt="Live" />
                </a>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
});

export { ProjectBody };
