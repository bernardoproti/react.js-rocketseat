import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import styles from './App.module.css'
import "./global.css"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Bernardo Proti" content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <Post author="Guilherme Pereira" content="Um novo post legal sobre o que fiz hoje." />
        </main>
      </div>
    </div>
  )
}
