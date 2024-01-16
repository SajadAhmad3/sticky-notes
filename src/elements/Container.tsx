import React from 'react';
type Props = {
  children?: React.ReactNode;
};
const Container = ({ children }: Props) => {
  const containerStyle = {
    background: 'RGB(173,185,171)',
    padding: '20px'
  };

  return <div  className={` container xl:rounded-xl ${
    window.innerWidth < 550 ? "h-screen" : ""
  }`}style={containerStyle}>
    {children}
    </div>;
};
export default Container;