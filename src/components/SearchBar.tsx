import styles from './SearchBar.module.css';
import { PlusCircle } from "phosphor-react";
import { useState } from 'react';

interface SearchBarProps {
  addNewTask: (task: string) => void;  
}

export function SearchBar({ addNewTask }: SearchBarProps) {
  const [ newTask, setNewTask ] = useState('')

  function handleAddNewTask() {
    if(!newTask) return;
    addNewTask(newTask);
    setNewTask('')
  }

  return (
    <div className={styles.barContainer}>
      <input 
        className={styles.searchInput} 
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Adicione uma nova tarefa" 
      />
      <button onClick={handleAddNewTask} className={styles.buttonCreate}>
        <p>Criar</p>
        <PlusCircle size={20} weight="regular" />
      </button>
    </div>
  )
}