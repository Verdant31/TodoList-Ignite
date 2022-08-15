import { Task } from '../contexts/TasksContext'
import { ListItemCard } from './ListItemCard'
import styles from './TasksList.module.css'

interface TasksList {
  tasks: Task[]
}

export function TasksList({tasks}: TasksList) {
  return (
    <main className={styles.tasksContainer}>
      <header className={styles.header}>
        <div className={styles.tasksTitleContainer}>
          <p className={styles.createdTasksTitle}>Tarefas criadas</p>
          <div className={styles.counterContainer}>
            <p>{tasks.length}</p>
          </div>
        </div>
        <div className={styles.tasksTitleContainer}>
          <p className={styles.completedTasksTitle}>Concluidas</p>
          {tasks.length > 0 
            ? (
              <div className={styles.largeCounterContainer}>
                <p>{tasks.filter(task => task.status).length} de {tasks.length} </p>
              </div>
            )
            : (
              <div className={styles.counterContainer}>
                <p>0</p>
              </div>
            )
          }
        </div>
      </header>
      {(tasks.length > 0) 
        ? (
          <div className={styles.listContainer}>
            {tasks.map((task) => (
              <ListItemCard key={task.text} task={task} />
            ))}
          </div>
        )
        : (
          <div className={styles.emptyListContainer}>
            <img className={styles.emptyListIcon} src="/clipboardIcon.svg" alt="Icone de um caderno" />
            <div className={styles.emptyListText}>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )
      }

    </main>
  )
}

