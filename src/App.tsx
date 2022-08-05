//Importação de estilização
import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
      <Tasks />
      </div>
    </>
  )
}

export default App