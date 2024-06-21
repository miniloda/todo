import MainBody from "./mainbody/MainBody";
import Menu from "./menu/Menu";
import { useEffect, useState } from "react";
function Todo() {
    const [section, setSection] = useState("My Day")

    function updateSection(section){
        setSection(section)
    }
    useEffect(()=>{
        console.log(section)
    },[section])
    return (
        <div className="flex p-2">
              <Menu handleClick = {updateSection}/>
            <MainBody selectedSection={section}/>
        </div>
    );
}

export default Todo;