import { useState } from 'react'
import { TaskType } from '../App'

import styles from './Task.module.css'

function Task({ id, title, isDone, handleTaskToggle, handleTaskDelete }: TaskType) {
  const [taskState, setTaskState] = useState(isDone)

  function taskToggle() {
    const newTaskState = !taskState
    setTaskState(newTaskState)

    handleTaskToggle(id, newTaskState)
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id={id}
          onChange={taskToggle}
          checked={taskState === true}
        />
        <label htmlFor={id}>
          <span>
            <svg width="12px" height="9px" viewBox="0 0 12 9">
              <polyline points="1 5 4 8 11 1"></polyline>
            </svg>
          </span>
          <span>{title}</span>
        </label>
      </div>

      {/* Button renders icon via CSS */}
      <button onClick={() => handleTaskDelete(id)}>
        <span>&nbsp;</span>
      </button>
    </div>
  )
}

export default Task