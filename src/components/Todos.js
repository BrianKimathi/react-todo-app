import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


function Todos() {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos)

    return (

        <>
            <div className='mt-4 text-3xl font-bold text-indigo-600'>Your Todos</div>
            {todos.map((todo) => (
                <li 
                    key={todo.id} 
                    className="border mt-3 rounded border-indigo-400 w-5/12 flex mb-4 justify-between items-center">
                    <h2 className='p-3 text-xl text-indigo-600'>{todo.text}</h2>
                    <button 
                        className='border border-blue-400 rounded h-8 px-2 mx-5'
                        onClick={() => dispatch(removeTodo(todo.id))}
                    >
                        Remove
                    </button>
                </li>
            ))}
        </>

    )

}

export default Todos