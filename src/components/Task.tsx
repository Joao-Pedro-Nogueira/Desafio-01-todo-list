//Importação de estilização
import '../global.css'
import styles from './Task.module.css'

//Importação de bibliotecas
import { Trash } from 'phosphor-react'

interface propsType{
  id: string,
  content: string,
  deleteTask: Function
}

export function Task({id, content, deleteTask}:propsType) {

  function onDeleteTask () {
    deleteTask(id)

    console.log(`Deletar ${id}`)
  }

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>{content}</p>
      <button 
        className={styles.deleteButton}
        onClick={onDeleteTask}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}