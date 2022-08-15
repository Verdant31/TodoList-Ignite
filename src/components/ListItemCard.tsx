import { Check, Trash } from 'phosphor-react'
import { Task, useTasksContext } from '../contexts/TasksContext';
import styles from './ListItemCard.module.css'

interface ListItemCard {
  task: Task;
}

export function ListItemCard({task}: ListItemCard) {
  const { removeTask, changeTaskStatus } = useTasksContext();
  function handleRemoveTask() {
    removeTask(task)
  }
  function handleChangeTaskStatus() {
    changeTaskStatus(task)
  }

  return (
    <div className={styles.cardContainer}>
      {task.status === true 
        ? (
            <button onClick={handleChangeTaskStatus} className={styles.completedTask}>
              <Check size={9} weight="bold" color="#fff" />
            </button>
          )
        : <button onClick={handleChangeTaskStatus} className={styles.pendingTask}></button>
      }
      <p>{task.text}</p>
      <button>
        <Trash  
          onClick={handleRemoveTask}  
          size={24} 
          weight="regular" 
        />
      </button>

    </div>
  )
}