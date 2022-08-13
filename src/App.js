import React from 'react'
import data from './data/recipes.json'
import { Menu } from './components'
import './App.css'

function App() {
  return (
    <div className="App">
      <Menu recipes={data} />
    </div>
  )
}

export default App
