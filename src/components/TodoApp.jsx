import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import Todo from './Todo';


function TodoApp() {
    
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([
        "Buy groceries",
        "Finish work project",
        "Clean the house",
        "Learn to code"
    ])

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'))
        if(storedTodos){
            setTodos(storedTodos)
        }
    }, [])

    function addTodo(){
        if(input.trim()){
            const todosCopy = [input, ...todos]
            setTodos(todosCopy)
            localStorage.setItem('todos', JSON.stringify(todosCopy))
            setInput('')
        }
    }

    function deleteTodo(getIndex){
        const todosCopy = [...todos]
        todosCopy.splice(getIndex, 1)
        setTodos(todosCopy)
        localStorage.setItem('todos', JSON.stringify(todosCopy))
    }

    function handleKeyDown(e){
        if(e.key === 'Enter'){
            addTodo()
        }
    }

    function clearAll(){
        setTodos([])
        localStorage.setItem('todos', JSON.stringify([]))
    }

  return (
    <div className='bg-white text-black w-1/2 p-10 rounded-md'>
        <h1 className='text-5xl font-medium tracking-tighter text-center uppercase'>Todo List</h1>
        <div className='flex text-2xl gap-2 my-8'>
            <input 
                className='flex-grow p-3 truncate border-black/30 rounded-md border-2 min-w-0' 
                placeholder='Add new todo' 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                onKeyDown={handleKeyDown}
            />
            <div 
                className='cursor-pointer flex justify-center bg-black rounded-md text-white text-3xl items-center px-4'
                onClick={addTodo}
            >
                <FaPlus />
            </div>
        </div>
        <div>
            {
                todos.map((item, index) => <Todo key={index} deleteTodo={deleteTodo} index={index} item={item} />)
            }
        </div>
        <div className='flex justify-between items-center mt-8'>
            <p className='text-2xl'>{todos.length} tasks pending</p>
            <button onClick={clearAll} className='bg-black text-white rounded-md p-3 text-xl'>Clear All Tasks</button>
        </div>
    </div>
  )
}

export default TodoApp