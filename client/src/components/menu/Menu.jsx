import {HamburgerIcon, CalendarIcon} from '@chakra-ui/icons'
import { useState, useEffect } from 'react';
import { faSun, faStar, faUser, faCalendar} from '@fortawesome/fontawesome-free-regular';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Menu() {
    const sectionsId = ["myday", "important", "planned", "tasks", "assigned"];
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeElement, setActiveElement] = useState(sectionsId[0]);
    function handleClick() {
        setIsExpanded(!isExpanded);
    }
    function updateActiveElement(sectionId){
        setActiveElement(sectionId);
    }
    useEffect(() => {
        for(let i = 0; i < sectionsId.length; i++){
            document.getElementById(sectionsId[i]).classList.remove("active");
        }
        if(document.querySelector(`#${activeElement}`)!==null){
        document.querySelector(`#${activeElement}`).classList.add("active");
        }
    }, [activeElement, sectionsId]);
    useEffect(() => {
        if (isExpanded) {
            document.getElementById("expanded").classList.remove("hidden");
            document.getElementById("collapsed").classList.add("hidden");
        } else {
            document.getElementById("collapsed").classList.remove("hidden");
            document.getElementById("expanded").classList.add("hidden");
        }
    }, [isExpanded])
    return (
        <>
            <div className = "m-3 w-1/3" id = "expanded">
                <ExpandedMenu handleClick = {handleClick} setChosen = {updateActiveElement}/>
            </div> 
            <div className = "m-3" id = "collapsed">
                <CollapsedMenu handleClick = {handleClick} />
            </div>
        </>

    )
}

function ExpandedMenu({handleClick, setChosen}) {

    return (
        <div className='flex flex-col items-start '>
            <button onClick={() => handleClick()} className='p-2'>
                    <HamburgerIcon />

                </button>
            <div className = "w-full">
                <div className = "flex items-center hover:bg-slate-400 cursor-pointer w-11/12 p-1" onClick={() => setChosen("myday")} id = "myday">
                    <FontAwesomeIcon icon={faSun} className = "text-red-700 mr-2 w-5"/>
                    <p>My Day</p>
                </div>
                <div className = "flex items-center hover:bg-slate-400 cursor-pointer w-11/12 p-1" onClick={() => setChosen("important")} id = "important">
                    <FontAwesomeIcon icon={faStar} className='mr-2 w-5'/>
                    <p>Important</p>
                </div>
                <div className = "flex items-center hover:bg-slate-400 cursor-pointer w-11/12 p-1" onClick={() => setChosen("planned")} id = "planned">
                    <FontAwesomeIcon icon={faCalendar} className='mr-2 w-5'/>
                    <p>Planned</p>
                </div> 
                <div className = "flex items-center hover:bg-slate-400 cursor-pointer w-11/12 p-1" onClick={() => setChosen("assigned")} id = "assigned">
                    <FontAwesomeIcon icon={faUser} className='mr-2 w-5'/>
                    <p>Assigned to me</p>
                </div>
                <div className = "flex items-center hover:bg-slate-400 cursor-pointer w-11/12 p-1" onClick={() => setChosen("tasks")} id = "tasks">
                    <FontAwesomeIcon icon={faHouse} className='mr-2 w-5'/>
                    <p>Tasks</p>
                </div>
            </div>
        </div>
    )
}

function CollapsedMenu({handleClick}) {

    return (
        <div className=''>
            <button onClick={() => handleClick()} className='p-2'>
                    <HamburgerIcon />
                </button>
        </div>
    )
}
export default Menu;