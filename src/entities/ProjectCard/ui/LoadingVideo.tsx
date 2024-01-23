import { Projects } from '@/shared/data/constants';
import { FC } from 'react';

interface LoadingVideoProps {
  className?: string;
  project: Projects;
  isLoading: boolean;
  onLoad: () => void;
}

const LoadingVideo: FC<LoadingVideoProps> = (props) => {
  const {
    className,
    project: { title = '', video, mainImg },
    isLoading,
    onLoad,
  } = props;

  if (video) {
    return (
      <video
        className={className}
        src={video}
        autoPlay
        muted
        loop
        style={{ display: isLoading ? 'none' : 'block' }}
        onCanPlay={onLoad}
      />
    );
  } else {
    return (
      <img
        className={className}
        src={mainImg}
        alt={title}
        style={{ display: isLoading ? 'none' : 'block' }}
        onLoad={onLoad}
      />
    );
  }
};

export { LoadingVideo };
