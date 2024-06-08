import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { StarIcon } from '@chakra-ui/icons';
import useSound from 'use-sound';
import clickSound from '../../assets/sounds/success.mp3';

function TaskCard({ task, setTaskList, className }) {
  const [playSound] = useSound(clickSound);
  const [completed, setCompleted] = useState(task.completed);
  const [isImportant, setIsImportant] = useState(task.important);

  const handleImportant = async () => {
    console.log("checked");
    try {
      const response = await fetch(`http://localhost:5050/todo/${task._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: task.task,
          important: !isImportant,
          completed: task.completed
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }

      setTaskList(prevTaskList =>
        prevTaskList.map(t =>
          t._id === task._id ? { ...t, important: !isImportant } : t
        )
      );
      setIsImportant(!isImportant);
    } catch (error) {
      console.error(error);
    }
  };

  const handleComplete = async () => {
    if (!completed) {
      playSound();
    }
    try {
      const response = await fetch(`http://localhost:5050/todo/${task._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: task.task,
          completed: !completed,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }

      setTaskList(prevTaskList => 
        prevTaskList.map(t => 
          t._id === task._id ? { ...t, completed: !completed } : t
        )
      );

      setCompleted(!completed);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={className}>
      <div
        className={`flex items-center justify-between h-10 mt-2 bg-gray-400 rounded-md opacity-75 cursor-pointer`}
      >
        {completed ? (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="p-2"
            color="white"
            onClick={handleComplete} // Remove parentheses
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircle}
            className="p-2"
            color="white"
            onClick={handleComplete} // Remove parentheses
          />
        )}
        <p className={`w-full text-sm ${completed ? 'line-through' : ''}`}>{task.task}</p>
        <div className="p-2">
          {isImportant ? (
            <StarIcon color="yellow" onClick={handleImportant} key="important" /> // Remove parentheses
          ) : (
            <StarIcon color="white" onClick={handleImportant} key="unimportant" /> // Remove parentheses
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;