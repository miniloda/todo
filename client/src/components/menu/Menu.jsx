import { HamburgerIcon, CalendarIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { faSun, faStar, faUser, faCalendar } from '@fortawesome/fontawesome-free-regular';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Menu.css'; // Import the CSS file

function Menu({ handleClick }) {
  const sectionsId = ["My Day", "Important", "planned", "tasks", "assigned"];
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeElement, setActiveElement] = useState(sectionsId[0]);

  useEffect(() => {
    handleClick(activeElement);
  }, [activeElement, handleClick]);

  function toggleMenu() {
    setIsExpanded(!isExpanded);
  }

  function updateActiveElement(sectionId) {
    setActiveElement(sectionId);
  }

  useEffect(() => {
    sectionsId.forEach(id => {
      document.getElementById(id)?.classList.remove("active");
    });
    document.getElementById(activeElement)?.classList.add("active");
  }, [activeElement, sectionsId]);

  return (
    <div className={`menu-container ${isExpanded ? 'expanded' : 'collapsed'} h-dvh`}>
      <div className={`menu ${isExpanded ? 'expanded' : 'collapsed'}`} id="menu">
        <ExpandedMenu toggleMenu={toggleMenu} setChosen={updateActiveElement} />
      </div>
      <div className="menu-toggle" id="toggle">
        <CollapsedMenu toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

function ExpandedMenu({ toggleMenu, setChosen }) {
  return (
    <div className='flex flex-col items-start'>
      <button onClick={toggleMenu} className='p-2'>
        <HamburgerIcon />
      </button>
      <div className="w-full">
        <div className="flex items-center w-11/12 p-1 rounded-md cursor-pointer hover:bg-slate-300" onClick={() => setChosen("My Day")} id="My Day">
          <FontAwesomeIcon icon={faSun} className="w-5 mr-2 text-red-700" />
          <p>My Day</p>
        </div>
        <div className="flex items-center w-11/12 p-1 rounded-md cursor-pointer hover:bg-slate-300" onClick={() => setChosen("Important")} id="Important">
          <FontAwesomeIcon icon={faStar} className='w-5 mr-2' />
          <p>Important</p>
        </div>
        <div className="flex items-center w-11/12 p-1 rounded-md cursor-pointer hover:bg-slate-300" onClick={() => setChosen("planned")} id="planned">
          <FontAwesomeIcon icon={faCalendar} className='w-5 mr-2' />
          <p>Planned</p>
        </div>
        <div className="flex items-center w-11/12 p-1 rounded-md cursor-pointer hover:bg-slate-300" onClick={() => setChosen("assigned")} id="assigned">
          <FontAwesomeIcon icon={faUser} className='w-5 mr-2' />
          <p>Assigned to me</p>
        </div>
        <div className="flex items-center w-11/12 p-1 rounded-md cursor-pointer hover:bg-slate-300" onClick={() => setChosen("tasks")} id="tasks">
          <FontAwesomeIcon icon={faHouse} className='w-5 mr-2' />
          <p>Tasks</p>
        </div>
      </div>
    </div>
  );
}

function CollapsedMenu({ toggleMenu }) {
  return (
    <div className='w-auto'>
      <button onClick={toggleMenu} className='p-2'>
        <HamburgerIcon />
      </button>
    </div>
  );
}

export default Menu;
