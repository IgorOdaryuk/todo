import {useState} from 'react'
import './App.css';

function App() {
  const [task, setTask] = useState([])
  const [addInput, setAddInput] = useState('')
  const [editInput, setEditInput] = useState('')
  const [editId, setEditId] = useState('')

  return <div className="App">
  
  <div className="projectName">TODO LIST FOR TEST</div>

      <div className="inputWrapper">
        <div className="inputContainer">
          <input type="text" placeholder="Add Task" />
          <button>Add</button>
        </div>

        <div className="inputContainer">
        <input type="text" placeholder="Edit Task" />
        <button>Edit</button>
        <button>Cancel</button>
      </div>
    </div>
        
        <div className="content"></div>
    </div>
}

export default App;
