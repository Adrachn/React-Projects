import React from "react";
// Import components
import Todo from "./Todo"

const TodoList = ({todos, setTodos, filteredTodos}) => {
   
    
    return(
        <div class={"todo-container"}>
            <ul class={"todo-list"}>
                {filteredTodos.map(todo => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        text={todo.text} 
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
}

//parent component

export default TodoList;