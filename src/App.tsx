import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Video7 } from './examples/Video7'
// import { Video9 } from './examples/Video9'
import Video10 from './examples/Video10/Video10'
import Video13 from './examples/Video13'
// import Video5 from "./examples/Video5"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn Typescript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* <Video5 name={"Huong"}></Video5> */}
      {/* <Video7></Video7> */}
      {/* <Video9></Video9> */}
      <Video10 
      defaultName=''
      defaultAge= {''}
      />
      {/* <Video13 
      name={"Thu"}
      // age={19}
      // address={"Ha Noi"}
      /> */}
    </>
  )
}

export default App
