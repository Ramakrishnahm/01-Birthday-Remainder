import {useState} from 'react';
import data from './Data';
import List from './List'


function App(){
  const[people,setPeople] = useState(data)
  return(
    <main>
      <section className = 'container'>
        <h3>{people.length}birthdays today</h3>
        <List people = {people}/>

        <button 
        type = 'buttton'
        className = 'btn btn-block'
        onClick = {() =>setPeople([])}>
          clear all data
        </button>

      </section>
    </main>
  )
}

export default App;