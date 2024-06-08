import { useEffect, useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import { AddIcon } from "@chakra-ui/icons";

export default function TaskBody() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const response = await fetch("http://localhost:5050/todo");
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const taskList = await response.json();
      console.log(taskList);
      setTaskList(taskList);
    }
    getTasks();
    return;
  }, [taskList.length]);

  function mapTasks() {
    return taskList
      .filter((task) => !task.completed) // Filter out completed tasks
      .map((task) => <TaskCard task={task} setTaskList={setTaskList} key={task._id} className="w-full" />);
  }

  function mapCompletedTask() {
    return taskList
      .filter((task) => task.completed) // Filter out incomplete tasks
      .map((task) => <TaskCard task={task} setTaskList={setTaskList} key={task._id} className="w-full" />);
  }

  const completedTasks = taskList.filter(task => task.completed);

  return (
    <>
      <AddTask setTaskList={setTaskList} />
      <div className="w-full">
        {mapTasks()}
      </div>
      {completedTasks.length > 0 && (
        <Accordion allowToggle className="w-full mt-1">
          <AccordionItem border="none">
            <AccordionButton>
              <Box flex="1" textAlign="left" className="px-2">
                Completed
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {mapCompletedTask()}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
}

const AddTask = ({ setTaskList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  const handleDivClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      const task = { task: value, completed: false, important: false };
      console.log("Adding task...");
      try {
        const response = await fetch("http://localhost:5050/todo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        });
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          console.error(message);
          return;
        }
        const newTask = await response.json();
        setTaskList((prevTaskList) => [...prevTaskList, newTask]);
      } catch (error) {
        console.error("Something went wrong", error);
      } finally {
        setValue("");
        setIsEditing(false);
      }
    }
  };

  return (
    <div>
      <div
        className="flex items-center bg-gray-400 rounded-md opacity-75 cursor-pointer"
        onClick={handleDivClick}
      >
        <div className="p-2">
          <AddIcon color="white" />
        </div>
        {isEditing ? (
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="w-full bg-transparent border-none outline-none focus:outline-none"
            autoFocus
            onKeyPress={handleKeyPress}
            placeholder="Add Task"
          />
        ) : (
          <p className="text-sm" onClick={handleDivClick}>
            Add Task
          </p>
        )}
      </div>
    </div>
  );
};