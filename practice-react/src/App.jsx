import { useState } from 'react'
import Hello from "./HelloWorld"
import Card from "./components/Card"

function App() {
  return (
    <>

    {/* 
      Practice # 1
      Using reusable components!
      <Hello />
      <Hello />
     */}

     <Card name="Teng" age = '22' />
     <Card />
    </>
  )
}

export default App
