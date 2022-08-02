//Importação de estilização
import '../global.css'
import styles from './TaskForm.module.css'

//Importação de bibliotecas
import React, { useState } from 'react'
import { PlusCircle } from 'phosphor-react'

export function TaskForm({ handleCreateNewTask }) {
  const [newTaskText, setNewTaskText] = useState('')

  return (
    <form className={styles.taskForm}>
      <textarea placeholder="Adicione uma nova tarefa"></textarea>
      <button onClick={handleCreateNewTask}>
        <strong>Criar</strong>
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
