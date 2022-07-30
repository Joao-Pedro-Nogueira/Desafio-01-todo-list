//Importação de estilização
import './global.css'
import styles from './App.module.css'

//Importação de bibliotecas
import React from 'react'

//Importação de componentes
import { Header } from './components/Header.jsx'
import { TaskForm } from './components/TaskForm'
import { Tasks } from './components/Tasks'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <TaskForm />
        <Tasks />
      </div>
    </>
  )
}

export default App
