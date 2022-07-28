//Importação de estilização
import '../global.css'
import styles from './Header.module.css'

//Importação de bibliotecas
import React from 'react'

//Importação de componentes e ícones
import rocket from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src={rocket} alt="Logo do TodoList" />
        <h1>
          to<span>do</span>
        </h1>
      </div>
    </header>
  )
}
