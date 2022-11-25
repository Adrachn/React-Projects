

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) =>{
    // Here I can write JS code and funtions
    
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    
    const submitTodoHandler = (e) => {
        e.preventDefault();
        // ..todos means if there's already todos in the list - pass it
        // {text} is in case we get a new one
        // todo install package for unique id
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };
    
    const statusHandler = (event) => {
        setStatus(event.target.value);    
    }
    
      return(
          <form>
              <input value={inputText} onChange={inputTextHandler} type="text" class="todo-input"/>
              <button onClick={submitTodoHandler}class="todo-button" type="submit"> 
                   <i class="fas fa-plus-square"></i>
              </button>
              <div class="select">
                  <select onChange={statusHandler} name="todos" class={"filter-todo"}>
                       <option value={"all"}>All</option>
                       <option value={"completed"}>Completed</option> 
                       <option value={"uncompleted"}>Uncompleted</option> 
                  </select>
              </div>
          </form>
      );
}

      export default Form;

