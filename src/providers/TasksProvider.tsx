import { ReactElement, createContext, useContext, useState } from "react";
import Task from "../types/task";
import uuid from "../utils/uuid";

export type TasksContextType = {
  tasks: Task[];
};

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
});

export const TasksProvider = ({ children }: { children: ReactElement }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  function completeTask(id: string) {}
  function uncompleteTask(id: string) {}
  function removeTask(id: string) {}

  function createTask({
    title,
    category,
    start,
    end,
  }: {
    title: string;
    category: string;
    start: Date;
    end: Date;
  }) {
    const _tasks = [...tasks];
    const task: Task = {
      id: uuid(),
      title,
      category,
      start,
      end,
      completed: false,
    };
    _tasks.push(task);
    setTasks(_tasks);
  }
  const contextValue = {
    tasks,
    createTask,
    completeTask,
    uncompleteTask,
    removeTask,
  };

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  return useContext(TasksContext);
};
