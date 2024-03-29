import React from "react"

export function GenerateData(){
    console.log('data')
    const initData = [
        {   
            id : 1,
            title  : 'Cleaning house',
            done : false
        },
        {   
            id : 2,
            title  : 'Do homework',
            done : false
        },
        {   
            id : 3,
            title  : 'Go out with your Pet',
            done : false
        },
        {   
            id : 4,
            title  : 'Listen Kendrick lamar',
            done : false
        },
    ]
    if(!localStorage.getItem('todos')){
        localStorage.setItem('todos',JSON.stringify(initData))
    }
}

export function updateTodoList(newTodoList){
    localStorage.setItem('todos',JSON.stringify(newTodoList))
}
export function getTodo(){
    let json = localStorage.getItem('todos')
    return !json ? [] : JSON.parse(json)
}
export const AuthContext = React.createContext(null)