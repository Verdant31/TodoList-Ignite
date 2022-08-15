import { createContext, useContext, useState } from "react";

export type Task = {
  text: string;
  status: boolean;
}

type TasksContextProps = {
  tasks: Task[]
  addNewTask: (task: string) => void;
  removeTask: (task: Task) => void;
  changeTaskStatus: (task: Task) => void;
}

type TasksContextProviderProps = {
  children: React.ReactNode;
}
const TasksContext = createContext({} as TasksContextProps);

export function TasksContextProvider(props: TasksContextProviderProps) {
  const [ tasks, setTasks ] = useState<Task[]>([])

  function addNewTask(newTask: string) {
    setTasks([...tasks, { text: newTask, status: false }])
  }

  function removeTask(task: Task) {
    setTasks(tasks.filter(t => t.text !== task.text))
  }

  function changeTaskStatus(task: Task) {
    console.log(tasks)
    setTasks(tasks.map(t => t.text === task.text ? { ...t, status: !task.status } : t))
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      addNewTask,
      removeTask,
      changeTaskStatus
    }}>
      {props.children}
    </TasksContext.Provider>
  )
}

export function useTasksContext() {
  const value = useContext(TasksContext);
  return value;
}