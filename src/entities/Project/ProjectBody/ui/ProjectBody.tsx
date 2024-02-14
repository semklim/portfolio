/* eslint-disable jsx-a11y/media-has-caption */
import { FC, HTMLAttributes, memo } from 'react';

import { Projects } from '@/shared/data/constants';
import { classNames } from '@/shared/libs';
import { ButtonPushable, Carousel } from '@/shared/ui';

import cls from './ProjectBody.module.scss';
import { IsRender } from './IsRender/IsRender';

interface ProjectBodyProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  project: Projects;
}

const ProjectBody: FC<ProjectBodyProps> = memo(({ className, project }) => {
  const {
    title,
    desc,
    descBig,
    mainImg,
    video,
    bigVideo,
    techs,
    usedApi,
    architectPatterns,
    gitLink,
    deployed,
    imgs,
    infoLinks,
  } = project;

  return (
    <section className={classNames(cls.projectWithDetail, {}, [className])}>
      <section className={cls.video}>
        {imgs ? (
          <Carousel images={imgs} />
        ) : (
          <video
            src={bigVideo || video}
            controls
            poster={mainImg}
            controlsList="nodownload"
            title={`Video about ${title}`}
          />
        )}
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
          <IsRender isRender={usedApi.length > 0}>
            <ul className={cls.apis}>
              <h2>API that use:</h2>

              {usedApi!.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </IsRender>
          <IsRender isRender={architectPatterns.length > 0}>
            <ul className={cls.arch}>
              <h2>Architect patterns that use:</h2>

              {architectPatterns!.map((el) => (
                <li key={el.name}>
                  <a href={el.link}>{el.name}</a>
                </li>
              ))}
            </ul>
          </IsRender>
        </div>
        <div className={cls.desc_txt}>
          <article>
            <h2>About Project</h2>
            {descBig ? <pre>{descBig}</pre> : <p>{desc}</p>}
            <p className={cls.subtitle}>Additional Links</p>
            <div className={cls.additionalLinks}>
              {infoLinks &&
                infoLinks.map((el) => (
                  <a href={el.link} key={el.name}>
                    {el.name}
                  </a>
                ))}
            </div>
          </article>
          <IsRender isRender={!!gitLink || !!deployed}>
            <div className={cls.readyWorks}>
              <h2>Check this work on:</h2>
              <ul className={cls.links}>
                {gitLink && (
                  <li>
                    <a href={gitLink}>
                      <ButtonPushable btnTxt="GitHub" />
                    </a>
                  </li>
                )}

                {deployed && (
                  <li>
                    <a href={deployed}>
                      <ButtonPushable btnTxt="Live" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </IsRender>
        </div>
      </section>
    </section>
  );
});

export { ProjectBody };
