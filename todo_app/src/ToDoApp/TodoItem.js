import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { FaRegCircle, FaRegCheckCircle, FaTrashAlt, FaEdit } from "react-icons/fa";
import "../Todo-css/style.css"
import { updateTodoList } from "./TodoData";
import TodoList from "./TodoList";

export default function TodoItem({ todoList, setTodoList, item, title, id, deleteTodo,setNewTitle,handleNewTitle,index }) {
    const [eidtBox, setEditBox] = useState(false)
    
    const switchToDone = (e) => {
        setTodoList(todoList.map((todo) => {
            if (todo.id == item.id) {
                return {
                    ...todo, done: !todo.done
                }
            }
            return todo
        }))
    }
    const deleteItem = () => {
        deleteTodo(id)
    }
    const renameItem = (e) => {
        setNewTitle(e.target.value)
    }
    const showEditBox = () => {
        setEditBox(!eidtBox)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        handleNewTitle(id)
        setEditBox(false)
    }
    return (
        <div className="item-container" >
            <div className="content-todo" >
                <div className="content" onClick={switchToDone}>
                    {item.done ? (<FaRegCheckCircle></FaRegCheckCircle>) : (<FaRegCircle></FaRegCircle>)}
                    <div onClick={switchToDone} className={item.done ? "item-title done" : "item-title"}>{title}</div>
                </div>
                {eidtBox && (
                    <Form onSubmit={handleSubmit}>
                        <FormControl type="text" placeholder="Type your rename task" onChange={renameItem}></FormControl>
                    </Form>
                )}
            </div>
            <div className="action">
                <FaTrashAlt onClick={deleteItem}></FaTrashAlt>
                <FaEdit onClick={showEditBox}></FaEdit>
            </div>

        </div>
    )
}