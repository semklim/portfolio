import { FC } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence, wrap } from 'framer-motion';
import cls from './Carousel.module.scss';
import { classNames } from '@/shared/libs';
import { ReactComponent as NextSlide } from '@/shared/assets/sliderIcons/next.svg';
import { ReactComponent as PrevSlide } from '@/shared/assets/sliderIcons/prev.svg';

interface CarouselProps {
  className?: string;
  images: string[];
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Carousel: FC<CarouselProps> = (props) => {
  const { className, images, ...otherProps } = props;
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={classNames(cls.carousel, {}, [className])}>
      <div className={cls['aspect-ratio-16-9']}></div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className={cls.img}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className={cls.next} onClick={() => paginate(1)}>
        <NextSlide />
      </div>
      <div className={cls.prev} onClick={() => paginate(-1)}>
        <PrevSlide />
      </div>
    </div>
  );
};

export { Carousel };
