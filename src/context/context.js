import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const ThemeContexttt = createContext();
export function ThemeProvider({ children }) {

  const Alert = () => { 
    Swal.fire({
      title: "Good job!",
      text: "Added to missions!",
      icon: "success"
    });
   }
   const whrning = () => { 
    Swal.fire({
      title: "plise write Task!",
      text: "write missions!",
      
    });
   }


  const [subTask, setSubTask] = useState("");
  const [item, setItem] = useState(null);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const detailsInput = (event) => {
    setSubTask(event.target.value);
  };

  const addTask = () => {
    if (subTask === "") {
      whrning()
    } else {
      setTasks([...tasks, { id: tasks.length, title: subTask }]);
      setSubTask("");
      Alert()
    }
  };

  const remove = (id) => {
    const filteredArray = tasks.filter((item) => item.id !== id);
    setTasks(filteredArray);
  };

  const editTask = (task) => {
    const editTask = tasks.map((item) => {
      return item.id === task.id ? task : item;
    });
    setTasks(editTask);
  };

  const finde = (id) => {
    const task = tasks.find((item) => item.id === id);
    setItem(task);
    console.log("done");
  };

  return (
    <ThemeContexttt.Provider
      value={{
        editTask,
        finde,
        item,
        detailsInput,
        subTask,
        addTask,
        tasks,
        remove,
     
      }}
    >
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
