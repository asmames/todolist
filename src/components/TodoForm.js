import {Button,TextField} from "@material-ui/core";
import React, {useState} from "react" ;
import uuid from "uuid";

function TodoForm({addTodo}) {
const [todo, setTodo] = useState({
    id: "" ,
    task : "",
    completed : false

}) ;
function handleTaskInputChange (e) {
    setTodo ({ ...todo, task: e.target.value}) ;
}
function handleSubmit(e) {
    e.preventDefault ();
    if (todo.task.trim()) {
        addTodo({...todo, id:uuid.v4() });
        setTodo({...todo, task: "" });
        
    }
    
}

return (
<form onSubmit={handleSubmit}>
<TextField
label="task"
name = "task"
type = "Text"
value= {todo.task}
onChange ={handleTaskInputChange}
/>
<button type= "submit"> submit</button>

</form>
);
}

export default TodoForm ;
