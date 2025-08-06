import {  useEffect } from 'react';
import './App.css'
import { startAssistant, } from './api';


function App() {
  useEffect (() => {
    startAssistant()
  })
  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <h1>Hi I'm Your Tour Guide</h1>
      </div>
    </>
  )
}

export default App
