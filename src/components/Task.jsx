//Importação de estilização
import '../global.css'
import styles from './Task.module.css'

//Importação de bibliotecas
import React from 'react'
import { CheckCircle, Circle, Trash } from 'phosphor-react'

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, aliquam
        illo!
      </p>
      <button className={styles.deleteButton}>
        <Trash size={24} />
      </button>
    </div>
  )
}
