import { AddIcon } from "@chakra-ui/icons";
function TaskCard() {
    return (
        <div>
            {/*Generate Add task*/}
            <div className="flex items-center bg-gray-400 rounded-md opacity-75">
                <div className="p-2">
                    <AddIcon color= "white"/>
                </div>
                
                <p className="text-sm">Add a task</p>
            </div>
            {/*Generate Task list from database*/}

        </div>
    )
}

export default TaskCard;