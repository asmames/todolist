import React from "react" ;
import CloseIcon from "@material-ui/core"
import {Checkbox,IconButton,ListItem,Typography} from "@material-ui/core"
import TodoForm from "./TodoForm";



function Todo({todo, toggleComplete, removeTodo}) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }
    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    return (
       <ListItem style= {{display:"flex"}}>
        <Checkbox 
        checked={todo.completed}
        onClick={handleCheckboxClick}/>
        <Typography
        variant="body1" 
        style ={{ 
          
            textDecoration:todo.completed ? "line-through" : null

        }}
            
        
        >
        {todo.task} </Typography>
        <IconButton onClick={handleRemoveClick}>
       <CloseIcon/>
       </IconButton>
       </ListItem>
    );
}



export default Todo;