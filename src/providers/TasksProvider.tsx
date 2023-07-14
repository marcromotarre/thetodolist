import { ReactElement, createContext, useContext, useState } from "react";
import Task from "../types/task";
import uuid from "../utils/uuid";
import TasksData from "../data/tasks.json";
import { CategoryTypes } from "../data/categories";

export type TasksContextType = {
  tasks: Task[];
  createTask: (task: {
    title: string;
    category: string;
    start: Date;
    end: Date;
  }) => void;
};

type TaskType = {
  start: Date;
  end: Date;
  title: string;
  category: CategoryTypes;
};

type TaskJsonType = {
  start: string;
  end: string;
  title: string;
  category: CategoryTypes;
};

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  createTask: () => {},
});

function getTasksData(): TaskType[] {
  return TasksData.map((task: TaskJsonType) => ({
    ...task,
    start: new Date(Date.parse(task.start)),
    end: new Date(Date.parse(task.end)),
  }));
}

export const TasksProvider = ({ children }: { children: ReactElement }) => {
  const [tasks, setTasks] = useState<Task[]>(getTasksData());
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
    debugger;
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
