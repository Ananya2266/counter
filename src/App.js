import {useState} from 'react'

const App = () => {
  const [count,setcount]=useState(0)
  return (
    <div>
      <div className="hi">
        {count}
      </div>
      <button onClick={()=>setcount(count+100)}></button>
    </div>
  )
}

export default App

