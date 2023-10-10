import './HrLine.scss';

import { classNames } from '@/shared/libs';

interface HrLineProps {
  className?: string;
}

const HrLine = ({ className }: HrLineProps) => {
  return <hr className={classNames('hrUnderLine fadeInLeft animated', {}, [className])} />;
};

export { HrLine };
