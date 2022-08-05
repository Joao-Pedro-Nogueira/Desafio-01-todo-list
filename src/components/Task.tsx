//Importação de estilização
import '../global.css'
import styles from './Task.module.css'

//Importação de bibliotecas
import { Trash, Check } from 'phosphor-react'
import check from '../assets/check.svg'

interface propsType{
  id: string,
  content: string,
  deleteTask: Function,
  isComplete: boolean,
  switchState: Function,
}

export function Task({id, content, deleteTask, isComplete, switchState}:propsType) {

  function onDeleteTask () {
    deleteTask(id)

    console.log(`Deletar ${id}`)
  }

  function onSwitchState () {
    switchState(id)
  }

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={onSwitchState}>
        {isComplete ? <div className={styles.complete}><img src={check}/></div> : <div className={styles.uncomplete}></div>}
      </button>
      <p className={isComplete ? styles.completeContent : styles.uncompleteContent}>{content}</p>
      <button 
        className={styles.deleteButton}
        onClick={onDeleteTask}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}