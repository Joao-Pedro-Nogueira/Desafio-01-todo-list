//Importação de estilização
import '../global.css'
import styles from './Task.module.css'

//Importação de bibliotecas
import { Trash } from 'phosphor-react'

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>Ler Institutas da Fé Cristã de João Calvino</p>
      <button className={styles.deleteButton}>
        <Trash size={24} />
      </button>
    </div>
  )
}