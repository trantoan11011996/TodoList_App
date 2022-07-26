import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FormInput from "./FormIput";
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import { Form } from "react-bootstrap";
import "../Todo-css/style.css"
import { AuthContext, GenerateData, getTodo } from "./TodoData";


export default function TodoApp() {

    const [todoList, setTodoList] = useState(getTodo())
    const [todoName, setTodoName] = useState('')
    const [status, setStatus] = useState('All')
    const [filterTodo, setFilterTodo] = useState([])
    const [newTitle, setNewTitle] = useState('')


    useEffect(() => {
        saveToLocal()
        filterTodoList()
    }, [todoList, status])
    useEffect(() => {
        GenerateData()
        getLocal()
    }, [])
    console.log(todoList)
    const filterTodoList = () => {
        switch (status) {
            case 'Undone':
                console.log(todoList.filter(todo => todo.done === false))
                setFilterTodo(todoList.filter(todo => todo.done === false))
                break
            default:
                console.log(todoList)
                setFilterTodo(todoList)
                break
        }
    }

    const deleteTodo = (id) => {
        const newTodoList = todoList.filter((item) => {
            return item.id != id
        })
        setTodoList(newTodoList)
    }

    const handleNewTitle = (id) => {
        setTodoList(todoList.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo, title: newTitle, done: false
                }
            }
            return todo
        }))
        console.log(todoList)
    }
    const saveToLocal = () => {
        localStorage.setItem('todos', JSON.stringify(todoList))
    }
    const getLocal = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]))
        }
        else {
            let localTodo = JSON.parse(localStorage.getItem("todos"))
            setTodoList(localTodo)
        }
    }
    return (
        <AuthContext.Provider value={{ todoList, setTodoList }}>
            <div className="container">
                <h1>Todo App</h1>
                <FormInput setTodoName={setTodoName}
                    todoName={todoName}
                    todoList={todoList}
                    setTodoList={setFilterTodo}
                    status={status}
                    setStatus={setStatus} />

                <TodoList todoList={todoList}
                    setTodoList={setTodoList}
                    filterTodo={filterTodo}
                    deleteTodo={deleteTodo}
                    setNewTitle={setNewTitle}
                    handleNewTitle={handleNewTitle} />

                <TodoFooter todoList={filterTodo} />
            </div>
        </AuthContext.Provider>
    )

}