import MainBody from "./mainbody/MainBody";
import Menu from "./menu/Menu";
import { useState } from "react";
function Todo() {
    const [section, setSection] = useState("My Day")

    function updateSection(section){
        setSection(section)
    }
    return (
        <div className="flex p-2">
              <Menu setSection = {updateSection}/>
            <MainBody />
        </div>
    );
}

export default Todo;