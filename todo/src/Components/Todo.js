import React from "react";

const Todo = ({text, todos, todo, setTodos}) => {
    //Events

    //check if the item being clicked matches the one from the state
    // filter the todoarray in search if that item then get rid of it
    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id));
    };
    
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                //... means leave the poperties, just modify completed
                return {
                    ...item, completed: !item.completed
                };
            }
            // If they don't match - just return them the way they were
            return item;
        }))
    }
    
    return(
        <div class={"todo"}>
            <li class={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} class={"complete-btn"}> 
                <i class={"fas fa-check"}> </i>
            </button>
            <button onClick={deleteHandler} class={"trash-btn"}>
                <i className={"fas fa-trash"}></i>
            </button>
        </div>
    );
}
export default Todo;