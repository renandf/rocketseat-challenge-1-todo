import styles from './TasksOverview.module.css'

interface TasksOverviewProps {
  tasksCreated: number,
  tasksDone: number,
}

function TasksOverview({ tasksCreated, tasksDone }: TasksOverviewProps) {

  return (
    <section className={styles.overview}>
      <div className={styles.overviewCreated}>
        Tasks created
        <span className={styles.counter}>
          {tasksCreated}
        </span>
      </div>
      <div className={styles.overviewDone}>
        <span className={styles.counter}>
          {tasksDone} of {tasksCreated}
        </span>
        done
      </div>
    </section>
  )
}

export default TasksOverview