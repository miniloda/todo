import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { StarIcon } from '@chakra-ui/icons';

export default function TaskCardComplete(props){
	const [completed, setCompleted] = useState(props.tasks.completed);
  const [starred, setStarred] = useState(false);

  const handleClick = () => {
    // Your handleClick logic
  };

  const handleComplete = () => {
    console.log("checked");
    try {
      fetch(`http://localhost:5050/todo/${props.tasks._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: props.tasks.task,
          completed: !completed,
        }),
      });
      setCompleted(!completed);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Generate Add task */}
      <div
        className={`flex items-center justify-between h-10 mt-2 bg-gray-400 rounded-md opacity-75 cursor-pointer`}
        onClick={() => handleClick()}
      >
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="p-2"
            color="white"
            onClick={() => handleComplete()}
          />
        
        <p className="w-full text-sm">{props.tasks.task}</p>
        <div className="p-2">
          <StarIcon className="float-right" color="white" />
        </div>
      </div>
    </div>
  );
}