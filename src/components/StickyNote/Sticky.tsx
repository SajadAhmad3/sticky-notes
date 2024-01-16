
import React from 'react';
import TextInput from '../../elements/Input';
import Button from '../Button/Button';
import Heading from '../../elements/Heading';

interface NoteProps {
  title: string;
  description: string;
  onDelete: () => void;
  onEdit: () => void;
}

const NoteComponent: React.FC<NoteProps> = ({ title, description, onDelete, onEdit }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className=''>
    <div
      className={`m-2 p-4 h-74 w-62 rounded-md relative ${
        hovered ? '' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Heading priority="3" className="font-bold text-lg mb-2">{title}</Heading>
      <div className="h-44 overflow-y-auto mb-2"> 

        <TextInput
          className=" w-full  p-1 resize-none text-black border-none bg-transparent"
          value={description}
          readOnly
        />
      </div>
      {hovered && (
        <div className="flex justify-center absolute bottom-2 right-2">
          <Button  type='danger' onClick={onDelete} className="rounded-md">
            Delete
          </Button>
          <Button type='warning' onClick={onEdit} className="rounded-md">
            Edit
          </Button>
        </div>
      )}
    </div>
    </div>
  );
};

export default NoteComponent;
