import { useState } from "react"
import data from "./data"

function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className="container">
      <h1>{`${people.length} Birthdays Today`}</h1>
      {people.map(({id, name, age, image}) =>{
        return (
          <div className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h2>{name}</h2>
              <p>{age} years</p>
            </div>
          </div>
        )
      })}
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  )
}

export default App
