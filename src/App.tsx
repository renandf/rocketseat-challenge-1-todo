import { useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Placeholder from './components/Placeholder'

import styles from './App.module.css'

import './global.css'

interface TaskType {
  id: string;
  title: string;
  isDone: boolean;
}

export interface TaskProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <Placeholder />
      </div>
    </>
  )
}

export default App
