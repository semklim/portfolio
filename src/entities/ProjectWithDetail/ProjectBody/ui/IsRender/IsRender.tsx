import { FC, ReactNode } from 'react';

interface WorksProps {
  isRender?: boolean;
  children?: ReactNode;
}

const IsRender: FC<WorksProps> = ({ isRender = true, children }) => {
  if (isRender) {
    return <>{children}</>;
  }

  return <></>;
};

export { IsRender };
