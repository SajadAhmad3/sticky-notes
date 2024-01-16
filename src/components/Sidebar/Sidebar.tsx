import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Heading from "../../elements/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faList,
  faCalendarDays,
  faGreaterThan,
  faNoteSticky,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../../elements/SearchBox";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState(""); 
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <div
      className={`flex flex-col h-full w-52 bg-bk-600 p-4 rounded-xl ${
        isSidebarOpen ? "" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center">
        <Heading priority="4">Menu</Heading>
        {isSidebarOpen ? (
          <FontAwesomeIcon icon={faBars} size="xl" onClick={toggleSidebar} />
        ) : (
          <FontAwesomeIcon icon={faBars} size="xl" onClick={toggleSidebar} />
        )}
      </div>

      <div className="mt-4">
        <SearchBox onSearch={handleSearch} />
      </div>

      <div className="my-4 pb-4 border-b border-dark-600">
        <div>
          <Heading priority="6">TASKS</Heading>
        </div>
        <div className="mx-4 ">
          <ul>
                  
              <Link to={""} className="flex items-center py-2" >
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="pr-2"
                size="sm"
              />
              <li className=" text-gray-700 text-sm">Upcoming</li>
              </Link>
            
              <Link to={""} className="flex items-center pb-2">
              <FontAwesomeIcon icon={faList} className="pr-2" size="sm" />
              <li className=" text-gray-700 text-sm">Today</li>
              </Link>

              <Link to={""} className="flex items-center pb-2">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="pr-2"
                size="sm"
              />
              <li className=" text-gray-700 text-sm">Calender</li>
              </Link>
            
              <Link to={""} className="flex items-center pb-2">
              <FontAwesomeIcon icon={faNoteSticky} className="pr-2" size="sm" />
              <li className=" text-gray-700 text-sm">Sticky Wall</li>
              </Link>
            
          </ul>
        </div>
      </div>

      <div className="my-4 pb-4 border-b border-dark-600">
        <Heading priority="6">LISTS</Heading>
        <div className="mx-4">
          <ul>
           
              <Link to="" className="flex items-center pt-2">
                <FontAwesomeIcon icon={faPlus} className="pr-2" size="sm" />
                <li className="text-gray-700 text-sm">Add New List</li>
              </Link>
          
          </ul>
        </div>
      </div>

      <div className="my-4 pb-4 border-b border-dark-600">
        <Heading priority="6">TAGS</Heading>
        <div className="flex flex-wrap my-2">
          <Button size="sm">Tag 1</Button>
          <Button size="sm">Tag 2</Button>
          <Button size="sm" className="my-2">
            + Add Tag
          </Button>
        </div>
      </div>

      <div className="mt-auto mx-4">
        <Button size="sm" type="warning">
          <Link to="/Login">Sign Out</Link>
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;


