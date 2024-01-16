import React from 'react';
import { Link } from 'react-router-dom';

interface IButtonSpanProps {
  children: React.ReactNode;
  type?: string;
  size?: string;
  textColor?: string;
  color?: string;
  link?: string;
  className?: string;
  disabled?: boolean;
}

const ButtonSpan = ({
  children,
  type,
  size,
  className,
  disabled,
}: IButtonSpanProps) => {
  return (
    <div
      className={`rounded-md text-center ${
        className || ''
      } ${type === 'secondary'
        ? `border border-primary text-primary bg-transparent `
        : type === 'success'
        ? `bg-success-600 text-white-600 `
        : type === 'danger'
        ? `bg-danger-600 text-white-600 `
        : type === 'outline'
        ? 'border border-primary bg-white py-1 px-4 text-black-300 m-2 '
        : type === 'grey'
        ? 'border-none '
        : type === 'warning'
        ? 'border-none bg-warning-600 text-white '
        : 'bg-primary text-white '
      } ${
        size === 'xs'
          ? 'py-0 px-2 text-xs lg:px-4 lg:text-sm '
          : size === 'sm'
          ? 'py-1 px-4 text-sm '
          : size === 'base'
          ? 'text-base '
          : size === 'md'
          ? 'w-24 py-2 px-4 '
          : size === 'lg'
          ? 'py-2 px-4 text-sm lg:text-lg xl:px-8 '
          : 'py-2 px-4 text-md '
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </div>
  );
};

interface IButtonProps {
  type?: string;
  size?: string;
  children: React.ReactNode;
  textColor?: string;
  color?: string;
  onClick?: any;
  link?: string;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  type,
  size,
  children,
  onClick,
  link,
  className,
  disabled,
}: IButtonProps) => {
  return link ? (
    <Link to={link}>
      <ButtonSpan
        type={type}
        size={size}
        className={className}
        disabled={disabled}
      >
        {children}
      </ButtonSpan>
    </Link>
  ) : (
    <button
      className={`mx-2 ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <ButtonSpan
        type={type}
        size={size}
        className={className}
        disabled={disabled}
      >
        {children}
      </ButtonSpan>
    </button>
  );
};

export default Button;
