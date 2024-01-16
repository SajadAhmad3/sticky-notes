import React from 'react';

interface IParagraphProps {
  size?: string;
  textColor?: string;
  children: React.ReactNode;
}

const Paragraph = ({ size, textColor, children }: IParagraphProps) => {
  const classNames = `${
    size === "sm"
      ? "text-sm lg:text-lg"
      : size === "md"
      ? "text-xl lg:text-xxl"
      : size === "lg" && "text-6xl"
  } ${textColor ? textColor : "text-black"}`;

  return <p className={classNames}>{children}</p>;
};

export default Paragraph;
