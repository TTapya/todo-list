import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa6";


function Todo({ item, index, deleteTodo }) {
    const [hovering, setHovering] = useState(false)
  return (
    <div className='flex mb-3 rounded-md overflow-hidden relative' onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <div className='flex-grow bg-gray-200 truncate p-3 text-2xl'>{item}</div>
        <div 
            className={`${hovering ? 'flex' : 'hidden'} cursor-pointer justify-center items-center text-white bg-red-400 px-[1.3rem] text-xl`}
            onClick={() => deleteTodo(index)}
        >
            <FaTrash />
        </div>
    </div>
  )
}

export default Todo