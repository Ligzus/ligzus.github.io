import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom'

export const TasksContext = createContext(null);

export const TaskProvider = () => {
  let navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const getTasks = (cards) => {
    setTasks(cards);
    navigate('/');
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, getTasks }}>
      <Outlet />
    </TasksContext.Provider>
  );
};