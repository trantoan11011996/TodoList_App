import React from "react";  
import "../Todo-css/style.css"
import { Form } from "react-bootstrap";

export default function TodoFooter({todoList}){

    const filterTaks = todoList.filter((todo)=>{
        return todo.done == false
    })
    return(
        <div className="footer">
            {filterTaks.length < 1 ?  <Form.Text className="text-success alert-footer">All Done</Form.Text> : <Form.Text className="text-danger alert-footer">{filterTaks.length} tasks need to be DONE !!!!</Form.Text>}
        </div>
    )
}