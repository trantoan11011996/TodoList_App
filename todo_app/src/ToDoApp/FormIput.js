import { Alert } from "bootstrap";
import React, { useState } from "react";
import { Form, Row,Col } from "react-bootstrap";
import { updateTodoList } from "./TodoData";


export default function FormInput({todoName, setTodoName,todoList,setTodoList,status,setStatus}) {
    const [alert,setAlert] = useState(false)

    const handleChange = (e)=>{
        setTodoName(e.target.value)
    }   
    const handleAddTodo = (e)=>{
        e.preventDefault()
        const newTodo = {
            id : Math.random() * 1000,
            title : todoName,
            done : false
        }
        if(!todoName){
            setAlert(true)
            return
        }
        setTodoName('')
        const newTodoList = ([...todoList,newTodo])
        setTodoList(newTodoList)
        updateTodoList(newTodoList)
    }
    
    const handleFilter = (e)=>{
        setStatus(e.target.value)
    }


    return (
        <div>
            <Row>
                <Col md={3}>
                    <Form.Select aria-label="Default select example" onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="Undone">Undone</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form onSubmit={handleAddTodo}>
                        <Form.Control type="text" value={todoName} placeholder="Cleaning House..." onChange={handleChange}/>
                    </Form>
                    {alert && (
                          <Form.Text className="text-danger alert">Please input your task!!!!</Form.Text>
                    )}
                </Col>
            </Row>
        </div>
    )
}