import { useState } from 'react'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { TasksList } from './components/TasksList'
import { useTasksContext } from './contexts/TasksContext';

function App() {
  const { addNewTask, tasks } = useTasksContext();
  return (
    <div>
      <Header />
      <SearchBar addNewTask={addNewTask} />
      <TasksList tasks={tasks} />
    </div>
  )
}

export default App
