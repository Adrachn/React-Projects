import './App.css';
import React, {useState, useEffect} from "react";
// import components
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
   
    // State stuff
    const[inputText, setInputText] = useState("");
    const[todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    // USE EFFECT
    // Run once when the app starts ( empty array )
    useEffect(() =>{
        getLocalTodos()  
    }, []);
    // The empty array means that as soon as the app renders it will call this function once
    useEffect(()=>{
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    // Functions
    const filterHandler = () =>{
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default: 
                setFilteredTodos(todos);
                break;
        }
    }
    
    // Save to local
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    
    // Check if any stored todos
    const getLocalTodos = () => {
        if(localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        }
        else{
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        } 
    }
    
    return (
    <div class="App">
      <header>
          <h1>Today's Todo List</h1>
      </header>
        <Form 
            inputText= {inputText}
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText}
            setStatus={setStatus}
        />
        <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
