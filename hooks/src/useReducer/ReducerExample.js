import React, {useReducer, useState} from 'react';
import Todo from './Todo';

export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
}

// Payload is parameters for the actions we are performing
function reducer(todos, action){
	switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]; //return all our todos, which is our current state
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload.id) {
                    // spread our todo in a new todo item and set it opposite of completed
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            // if the id of the todo is not equal to the payload id, then we keep it. Otherwise get rid of
            return todos.filter(todo => todo.id !== action.payload.id);
            
        default:
            return todos
    }
}

function newTodo(name){
    return {id: Date.now(), name: name, complete: false};
}


export default function ReducerExample(){
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState("");
    
    function handleSubmit(e){
        e.preventDefault(); // prevent refreshing when called
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
        setName(""); // clears out the typed in name
    }

    console.log(todos)
    return(
        <>
          <form onSubmit={handleSubmit}>
              <input type="text" value={name} onChange={e => setName(e.target.value)}/>
          </form>
          {todos.map(todo => {
              return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
          })}
        </>
    )
}
