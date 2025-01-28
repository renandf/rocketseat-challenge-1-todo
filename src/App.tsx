import { useState, useRef } from 'react'
import Header from './components/Header'
import TasksOverview from './components/TasksOverview'
import AddTask from './components/AddTask'
import Placeholder from './components/Placeholder'
import Task from './components/Task'

import styles from './App.module.css'

import './global.css'

export interface TaskType extends HTMLDivElement {
  id: string;
  title: string;
  isDone: boolean;
  handleTaskDelete: (id: string) => void;
}

export interface TaskProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const totalCreated = useRef(tasks.length)
  const totalDone = useRef(tasks.filter(task => task.isDone === true).length)

  function handleTaskDelete(id: string) {
    const tasksWithoutItem = tasks.filter((task) =>
      task.id !== id
    )
    setTasks(tasksWithoutItem)
  }

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TasksOverview
          totalCreated={totalCreated.current}
          totalDone={totalDone.current}
        />
        {tasks.length === 0 ? (
          <Placeholder />
        ) : (
          tasks.map(task => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isDone={task.isDone}
                handleTaskDelete={handleTaskDelete}
              />
            )
          })
        )}
      </main>
    </>
  )
}

export default App
