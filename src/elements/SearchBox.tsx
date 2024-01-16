import React, { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    onSearch(newQuery); 
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent py-1 pl-10 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        onChange={handleInputChange}
      />
      <div className="absolute top-2 left-2">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBox;
