import Icons from "./Icons";
import TaskCard from "./TaskCard";
function MainBody() {
    const date = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <div className="w-2/5 bg-blue-500 p-10">
            <div className="flex justify-between">
                <section>
                    <h1 className="text-white text-3xl">My Day</h1>
                        <div>
                            <p className="text-slate-500">{days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}</p>
                        </div>
                    </section>

                <section>
                    <Icons />
                </section>
            </div>
            <div>
                <TaskCard />
            </div>

        </div>
    )
}

export default MainBody;