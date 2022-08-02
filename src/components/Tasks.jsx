//Importação de estilização
import '../global.css'
import styles from './Tasks.module.css'

//Importação de bibliotecas
import React from 'react'
import { PlusCircle, CheckCircle, Circle, Trash } from 'phosphor-react'

//Importação de componentes
import { Task } from './Task'

export function Tasks({ tasks }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <form className={styles.taskForm}>
          <textarea placeholder="Adicione uma nova tarefa" />
          <button>
            <strong>Criar</strong>
            <PlusCircle size={16} />
          </button>
        </form>
      </div>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>
        <div>
          <p className={styles.purpleText}>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>

      {tasks.map(task => {
        return <Task content={task} />
      })}
    </div>
  )
}
