import Icons from "./Icons";
import TaskBody from "./TaskBody";
import { useState, useEffect } from "react";
import Important from "./Important";

function MainBody({ selectedSection }) {
    const [section, setSection] = useState(selectedSection);
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    useEffect(() => {
        setSection(selectedSection);
    }, [selectedSection]);

    const renderContent = () => {
        switch (section) {
            case "My Day":
                return <TaskBody />;
            case "Important":
                return <Important />;
            default:
                return <TaskBody />;
        }
    };

    return (
        <div className="w-10/12 p-10 bg-blue-500 xl:w-2/5">
            <div className="flex justify-between">
                <section>
                    <h1 className="text-3xl text-white">My Day</h1>
                    <div>
                        <p className="text-slate-500">{days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}</p>
                    </div>
                </section>

                <section>
                    <Icons />
                </section>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    );
}

export default MainBody;