//Importação de estilização
import '../global.css'
import styles from './Task.module.css'

//Importação de bibliotecas
import { Trash } from 'phosphor-react'

interface propsType{
  content: string
}

export function Task({ content}:propsType) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>{content}</p>
      <button className={styles.deleteButton}>
        <Trash size={24} />
      </button>
    </div>
  )
}