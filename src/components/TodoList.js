import {list} from "@material-ui/core"
import React from "react" ;

import Todo from "./Todo";

function todoList({todos, toggleComplete,removeTodo}) {
    return (
        <list>
        {todos.map(todo=> (

            <Todo key={todo.id}
             todo= {todo} 
             toggleComplete={toggleComplete}
             removeTodo= {removeTodo}
             />
        ))}
        </list>
    );
}









export default todoList;