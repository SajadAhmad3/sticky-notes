import React, { CSSProperties } from 'react';

interface ITextInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  variant?: 'dark' | 'light';
  size?: 'small' | 'normal';
  type?: 'text' | 'password' | 'email' | 'name' | 'textarea';
  className?: string;
  readOnly?: boolean;
  style?: CSSProperties;
  rows?: number; // Add rows prop for textarea
}

const TextInput = ({
  placeholder,
  value,
  onChange,
  variant,
  size,
  type,
  className,
  readOnly,
  style,
  rows, // Receive rows as a prop
}: ITextInputProps) => {
  const inputStyle = {
    ...(readOnly ? { cursor: 'default', backgroundColor: 'transparent' } : {}),
    ...style,
  };

  if (type === 'textarea') {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void} // Cast the event type for textarea
        readOnly={readOnly}
        style={inputStyle}
        rows={rows || 6} // Set the number of rows for the textarea (default to 4 rows)
        className={`
          ${
            size === 'small' ? 'px-2 py-1 text-sm' : 'px-3 py-2 text-base'
          }
          ${
            variant === 'dark'
              ? 'bg-dark-800 text-white border border-dark-100'
              : 'bg-light-100 text-black border border-light-200'
          }
          p-2 w-3/5 border border-solid border-grey-300 rounded-md mr-2
          ${className || ''}
        `}
      />
    );
  } else {
    return (
      <input
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        style={inputStyle}
        className={`
          ${
            size === 'small' ? 'px-2 py-1 text-sm' : 'px-3 py-2 text-base'
          }
          ${
            variant === 'dark'
              ? 'bg-dark-800 text-white border border-dark-100'
              : 'bg-light-100 text-black border border-light-200'
          }
          p-2 w-3/5 border border-solid border-grey-300 rounded-md mr-2
          ${className || ''}
        `}
      />
    );
  }
};

export default TextInput;
