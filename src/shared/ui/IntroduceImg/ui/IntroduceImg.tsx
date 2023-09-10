import './IntroduceImg.scss';

import { SVGAttributes } from 'react';

import { ReactComponent as SvgProgerammer } from '@/shared/assets/progeramer/programming/programming-not-css.svg';
import { classNames } from '@/shared/libs';

interface IntroduceImgProps extends SVGAttributes<HTMLOrSVGElement> {
  className?: string;
}

const IntroduceImg = (props: IntroduceImgProps) => {
  const { className, ...otherProps } = props;
  return <SvgProgerammer className={classNames('animated', {}, [className])} {...otherProps} />;
};

export { IntroduceImg };
