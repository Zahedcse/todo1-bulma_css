import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css';
import {useState} from 'react'

function App() {
  const [todoTitle,setTodoTitle] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  // To store the Todo in a list

  const todoHandler = (e) => {
    const newTodo = {
      id: Date.now(),
      title: todoTitle
    }
    console.log(newTodo);
    e.preventDefault();
    setTodoList([newTodo, ...todoList]);
    setTodoTitle('');
  }
  // To Edit the Todo from the list
  const editTodo = (id) => {
    const tobeEdited = todoList.find(todo => todo.id === id);
    setIsEditable(true);
    setEditableTodo(tobeEdited);
    setTodoTitle(tobeEdited.title);
  }
  const updateTodo = (e) => {
    e.preventDefault();
   editableTodo.title = todoTitle;
    setIsEditable(false);
    setEditableTodo(null);
    setTodoTitle('');
  }

  // To delete the Todo from the list
  const deleteTodo = (id) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <div className="container column is-half-desktop">
        <div className="card">
          <div className="card-header">
            <h2 className='card-header-title is-centered'>Todo App</h2>
          </div>
          <div className="card-content">
            <form className="box">
              <div className="column is-12">
                <input type="text" className="input is-warning" id="todo" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)} />
              </div>
              <div className="column is-12">
                <button type="submit" className="button is-success is-rounded" onClick={(e) => isEditable === true ? updateTodo(e) : todoHandler(e)}>{ isEditable === true ? "Update Todo": "Add Todo"}</button>
              </div>
            </form>
            <div className="card-footer mt-3">
              <ul className="list-group">
                {
                  todoList.map((todo) => {
                    return (
                    <li type="1"className="list-group-item">
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                        <label className="custom-control-label"><span>{todo.title}</span> <button className='button is-primary block' onClick={()=>editTodo(todo.id)}>Edit</button> <button className='button is-danger block' onClick={()=>deleteTodo(todo.id)}>Delete</button></label>
                      </div>
                      </li>
                    )     
                  }
                )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
