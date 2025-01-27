import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TaskProps } from '../App'
import iconPlus from '../assets/icon-plus.svg'

import styles from './AddTask.module.css'

function AddTask({ tasks, setTasks }: TaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  // Updates the input value whenever it changes
  function handleTaskTextChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setNewTaskText(e.target.value)
  }

  function handleNewTask(e: FormEvent) {
    // Prevent page refresh after form submission
    e.preventDefault()

    // Set the new task object
    const newTask = {
      id: uuidv4(),
      title: newTaskText,
      isDone: false,
    }

    // Update state with new task
    setTasks([...tasks, newTask])

    // Empty the input by clearing the state
    setNewTaskText('')
  }

  const isCommentEmpty = newTaskText.length === 0

  return (
    <form
      className={styles.addTaskForm}
      onSubmit={handleNewTask}
    >
      <input
        type="text"
        placeholder="Type new task here..."
        value={newTaskText}
        onChange={handleTaskTextChange}
        required
      />
      <button
        type="submit"
        disabled={isCommentEmpty}
      >
        Add task
        <img src={iconPlus} alt="Plus icon" />
      </button>
    </form>
  )
}

export default AddTask