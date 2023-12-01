import {useState} from 'react'
import { IconButton } from '@mui/material';
import { CheckCircle, Edit, Delete } from '@mui/icons-material';
import './App.css';

function App() {

  const dummyData = [
    {id: 1, task: "Task 1", status: false},
    {id: 2, task: "Task 2", status: false},
    {id: 3, task: "Task 3", status: false},
  ]

  const [task, setTask] = useState(dummyData)
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
        
        <div className="content">
          {task.map((item) => {
            return (
              <div key={item.id} className="listItem">
                <p>{item.task}</p>

                <div className="actionBtns">
                <IconButton>
                  <CheckCircle />
                </IconButton>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
    </div>
}

export default App;
