import React, { InputHTMLAttributes } from 'react';

import { classNames } from '@/shared/libs';

import cls from './FormInput.module.scss';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  labelTxt: string;
  labelFor: string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { className, labelTxt, labelFor, ...otherProps } = props;

  return (
    <div className={classNames(cls.formInput, {}, [className])}>
      <label className={cls.input_label} htmlFor={labelFor}>
        {labelTxt}
      </label>
      <input
        className={cls.inputEl}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
    </div>
  );
};

export { FormInput };
