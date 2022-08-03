//Importação de estilização
import '../global.css'
import styles from './Tasks.module.css'

//Importação de bibliotecas
import { PlusCircle } from 'phosphor-react'
import { Task } from './Task'

export function Tasks() {
  return (
    <div className={styles.container}>
      <form className={styles.taskForm}>
        <textarea placeholder="Adicione uma nova tarefa"></textarea>
        <button>
          <strong>Criar</strong>
          <PlusCircle size={16} />
        </button>
      </form>
      {/* Container de tasks */}
      <div className={styles.wrapper}>
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
        < Task />
      </div>
    </div>
  )
}