const Heading = ({ priority, children, color, variant }: any) => {
    const DynamicTag: any = `h${priority}`;
    return (
      <DynamicTag
      className={` font-bold  ${
        priority === "1"
          ? ` text-4xl lg:text-6xl ${variant === 'grey' ? 'text-coolgray' : 'text-primary' }`
          : priority === "2"
          ? `text-xxxl lg:text-4xl`
          : priority === "3"
          ? ` text-xxxl `
          : priority === "4"
          ? `text-xxl`
          : priority === "5"
          ? `
              text-sm lg:text-base xl:text-md
            `
          : priority === "6"&& 'text-sm' 
      }
    ${color ? `${color}` : 'text-black'}
    `}
    >
      {children}
      </DynamicTag>
    );
  };
  export default Heading;