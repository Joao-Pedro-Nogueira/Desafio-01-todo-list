//Importação de estilização
import '../global.css'
import styles from './Task.module.css'

//Importação de bibliotecas
import React from 'react'
import { CheckCircle, Circle, Trash } from 'phosphor-react'

export function Task({ content }) {
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
