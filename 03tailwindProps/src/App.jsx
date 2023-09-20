import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  let person = {
    name: 'John',
    age: 30
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p=4 rounded-xl'>Tailwind test</h1>
      <Card btnText='visit us' person={person}></Card>
      <Card btnText='contact us' person={person}></Card>
    </>
  )
}

export default App
