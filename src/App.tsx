import { useState } from 'react'
import Header from './components/Header'
import TasksOverview from './components/TasksOverview'
import AddTask from './components/AddTask'
import Placeholder from './components/Placeholder'
import Task from './components/Task'

import styles from './App.module.css'

import './global.css'

export interface TaskType {
  id: string;
  title: string;
  isDone: boolean;
  handleTaskToggle: (id: string, newTaskState: boolean) => void;
  handleTaskDelete: (id: string) => void;
}

export interface TaskProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [tasksDone, setTasksDone] = useState(0)
  const tasksCreated = tasks.length

  function updateTasksDone(tasksArray: TaskType[]) {
    const tasksDoneCount = tasksArray.filter(task => task.isDone === true).length

    setTasksDone(tasksDoneCount)
  }

  function handleTaskToggle(id: string, newTaskState: boolean) {
    const tasksUpdated = tasks
    const taskIndex = tasks.findIndex(task => task.id === id)

    tasksUpdated[taskIndex].isDone = newTaskState

    setTasks(tasksUpdated)
    updateTasksDone(tasksUpdated)
  }

  function handleTaskDelete(id: string) {
    const tasksWithoutItem = tasks.filter((task) =>
      task.id !== id
    )

    setTasks(tasksWithoutItem)
    updateTasksDone(tasksWithoutItem)
  }

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TasksOverview
          tasksCreated={tasksCreated}
          tasksDone={tasksDone}
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
                handleTaskToggle={handleTaskToggle}
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
