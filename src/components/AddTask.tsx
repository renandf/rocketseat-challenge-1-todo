import { useState } from 'react'
import styles from './AddTask.module.css'

function AddTask() {
  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTask() {

  }

  return (
    <form
      className={styles.addTaskForm}
      action={handleNewTask}
    >
      <input
        type="text"
        value={newTaskText}
        required
      />
    </form>
  )
}

export default AddTask