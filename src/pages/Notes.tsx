
import Heading from "../elements/Heading";
import React, { useState } from "react";
import NotesList from "../components/StickyNotesList/StickyList";
import Sidebar from "../components/Sidebar/Sidebar";
import Layout from "../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Notes = () => {
  const containerStyle = {
    height: "750px",
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Layout>
        <div className="flex xl:m-20 lg:m-20 md:m-20 sm:m-0 ">
          <div
            className="flex bg-white w-full h-full rounded-xl relative p-2 "
            style={containerStyle}
          >
            <div className={`${
              window.innerWidth < 770 ? "absolute top-0 left-0 z-10 h-full" : ""
            }`}>
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              />
            </div>
            <div className="flex flex-col flex-1 mx-6 ">
              <div className="flex items-center  pt-2 pb-6">
              {isSidebarOpen ? null : ( 
                  <FontAwesomeIcon
                    icon={faBars}
                    size="xl"
                    onClick={toggleSidebar}
                    className="mr-4"
                  />
                )}
                <Heading priority="3">Sticky Wall</Heading>
              </div>

              <div className="overflow-y-auto p-6 border rounded-md h-full">
                <NotesList />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Notes;



