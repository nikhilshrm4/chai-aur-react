// echo "# JavascriptPractice" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/nikhilshrm4/JavascriptPractice.git
// git push -u origin main

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncreament = () => {
    if(count < 20){
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(Precount => Precount + 1);
      setCount(Precount => Precount + 1);
      setCount(Precount => Precount + 1);
    }
  }

  const handleDecreament = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
    <>
      <button onClick={handleDecreament}>-</button>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncreament}>+</button>
      <h3>{count}</h3>
    </>
  )
}

export default App
