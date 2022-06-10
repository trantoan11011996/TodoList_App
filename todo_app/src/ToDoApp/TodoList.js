import React from "react";
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";

export default function TodoList({todoList,setTodoList,filterTodo,deleteTodo,setNewTitle,handleNewTitle}) {
    return (
        <div className="todo-list">
            {filterTodo.map((todo,index)=>{
                return(
                    <TodoItem 
                    todoList={todoList} 
                    setTodoList={setTodoList} 
                    key={index} 
                    title = {todo.title} 
                    id = {todo.id} item={todo} 
                    deleteTodo = {deleteTodo} 
                    setNewTitle = {setNewTitle}
                    handleNewTitle={handleNewTitle}/>
                )
            })}
        </div>
    )
}