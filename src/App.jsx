//Importação de estilização
import './global.css'
import styles from './App.module.css'

//Importação de bibliotecas
import React, { useState } from 'react'

//Importação de componentes
import { Header } from './components/Header.jsx'
import { TaskForm } from './components/TaskForm'
import { Tasks } from './components/Tasks'

export function App() {
  const [tasks, setTasks] = useState([
    'Ler Institutas da Fé Cristã, de João Clavino'
  ])

  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, 'Assistir vidrados temporada 3'])
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <TaskForm handleCreateNewTask={handleCreateNewTask} />
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App
