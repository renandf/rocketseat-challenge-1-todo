import { useState } from 'react'
import { TaskType } from '../App'
import iconPlus from '../assets/icon-plus.svg'

import styles from './Task.module.css'

function Task({ title, isDone }: TaskType) {
  const [taskState, setTaskState] = useState(isDone)

  function handleTaskToggle() {
    setTaskState(!taskState)
  }

  const doneClass = taskState ? styles.taskDone : ''

  return (
    <div className={`${styles.task} ${doneClass}`}>
      <img src={iconPlus} alt="Plus icon" />
      <p>{title}</p>
      <button
        onClick={handleTaskToggle}
      >
        Test
      </button>
    </div>
  )
}
//  + (isDone && styles.done)

export default Task