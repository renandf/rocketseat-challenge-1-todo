import styles from './TasksOverview.module.css'

interface TasksOverviewProps {
  totalCreated: number,
  totalDone: number,
}

function TasksOverview({ totalCreated, totalDone }: TasksOverviewProps) {

  return (
    <section className={styles.overview}>
      <div className={styles.overviewCreated}>
        Tasks created
        <span className={styles.counter}>
          {totalCreated}
        </span>
      </div>
      <div className={styles.overviewDone}>
        <span className={styles.counter}>
          {totalDone} of {totalCreated}
        </span>
        done
      </div>
    </section>
  )
}

export default TasksOverview