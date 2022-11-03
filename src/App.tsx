
import Color from 'colorjs.io'
import { styles } from './App.css'

function App() {
  console.log('browser', new Color('#ffff33').to('hsl').toString())

  return (
    <div className={styles} />
  )
}

export default App
