//Importação de estilização
import './global.css'
import styles from './App.module.css'

//Importação de bibliotecas
import React, { useState } from 'react'

//Importação de componentes
import { Header } from './components/Header.jsx'
import { TaskForm } from './components/TaskForm'

export function App() {
  const [tasks, setTasks] = useState([
    'Ler Institutas da Fé Cristã, de João Clavino'
  ])

  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, 'Assistir Formula 1'])
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
<<<<<<< HEAD
        <Tasks tasks={tasks} />
=======
        <TaskForm />
>>>>>>> parent of 67b1844 (Componente Task criado e estilizado. Front-End estático completo)
      </div>
    </>
  )
}

export default App
