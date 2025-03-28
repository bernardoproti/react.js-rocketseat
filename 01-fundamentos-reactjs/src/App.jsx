import { Post } from "./components/Post"
import "./styles.css"

export function App() {
  return (
    <div>
      <Post author="Bernardo Proti" content="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
      <Post author="Lucas Miranda" content="Um novo post legal sobre o que fiz hoje."/>
    </div>
  )
}
