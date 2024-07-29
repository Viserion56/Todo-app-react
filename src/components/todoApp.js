import {useState} from 'react';
const TodoApp=()=>{
    
    const [todos, setTodos] = useState([
        
    ]);
    const [newToDo,setNewTodo]=useState("");
    const [newStatus,setnewStatus]=useState(false);
    const handleNewToDoChange=(e)=>{
       setNewTodo(e.target.value);
    }
    const handleCompletion=(e)=>{
        const task_id=Number(e.target.dataset.id);
        const updatedTodoStatus=e.target.checked;
        const newTodos=[...todos];
        const newItem={...newTodos[task_id]};
        newItem.isCompleted=updatedTodoStatus;
        newTodos.splice(task_id,1,newItem);
        setTodos(newTodos);
   
    // console.log(e.target.checked);

    }

    const handleToDoStatus=(e)=>{
        
        console.log(e.target.value);
        setnewStatus(e.target.value);
    }
    const loadNewToDo=(e)=>{
        e.preventDefault();
        const newTodoList=[...todos,{title:newToDo,isCompleted:newStatus}];
        setTodos(newTodoList);
        setNewTodo("");
        setnewStatus("");
    }  
    return (
        <div className="App">
      <div className='todo-wrapper'>
      <h1>Todo App</h1>
      <div className='todo-form'>
        <form>
            <input type='text' placeholder='Enter new todo...' onChange={handleNewToDoChange} value={newToDo}/>
            <select onChange={handleToDoStatus}>
                <option value={false}>Completed</option>
                <option value={true}>ToDo</option>
            </select>
            <button onClick={loadNewToDo}>Submit</button>
        </form>
      </div>
        <div className='todo-list'>
            {
                todos.map((todo,idx) => {
                    return <div className='todo-item'>
                        <input type='checkbox' data-id={idx} checked={todo.isCompleted} onChange={handleCompletion}></input>
                        <span className={todo.isCompleted?"completed":""}>
                        {todo.title}
                        </span>
                    </div>
                })
            }
          

        </div>
      </div>
    </div>
    )
}

export default TodoApp;