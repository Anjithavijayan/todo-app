
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, removeTodo, setFilter, setEditId } from '../store/todosSlice';

const TodoList = () => {
    const { items, filter } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const filteredTodos = items.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true; // 'all'
    });

    const handleEdit = (todo) => {
        dispatch(setEditId(todo.id));
    };

    return (
        <>
        <div className='d-flex justify-content-center align-items-center'>
            <div className='shadow p-5 mt-5 border rounded-2' style={{ width: '700px' }}>
                {filteredTodos.map((todo) => (
                    <div key={todo.id} className="form-check d-flex align-items-center border border-1 border-lightgrey mt-3 bg-light justify-content-between">
                        <div>
                            <input
                                type="checkbox"
                                className="form-check-input ms-2" 
                                style={{backgroundColor:'darkviolet'}}
                                checked={todo.completed}
                                onChange={() => dispatch(toggleTodo(todo.id))}
                            />
                            <label
                                className="form-check-label ms-4"
                                style={{ textDecoration: todo.completed ? 'line-through' : 'none' ,color:'blue'}}
                            >
                                {todo.text}
                            </label>

                                <div className=" d-flex text-muted ms-5" style={{ fontSize: '0.8em' }}>
                                    Created: {todo.createdAt} {/* Display createdAt timestamp */}
                                    {todo.completed && (
                                        <div className='ms-2'>Completed: {todo.completedAt}</div> // Display completedAt timestamp if completed
                                    )}
                                </div>
                           
                        </div>
                        <div>
                            <button
                                className="btn btn-light btn-sm ml-2 ms-2"
                                onClick={() => handleEdit(todo)}
                            >
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button
                                className="btn btn-light btn-sm ml-2 ms-2"
                                onClick={() => dispatch(removeTodo(todo.id))}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                ))}
                <div className='Todolists d-flex justify-content-center mb-3 mt-5'>
                    <button className='btn btn-outline-secondary p-2 shadow' onClick={() => dispatch(setFilter('all'))}>All</button>
                    <button className='btn btn-outline-secondary p-2 ms-2 shadow' onClick={() => dispatch(setFilter('active'))}>Active</button>
                    <button className='btn btn-outline-secondary p-2 ms-2 shadow' onClick={() => dispatch(setFilter('completed'))}>Completed</button>
                </div>
            </div>
        </div>
       
        </>
    );
};

export default TodoList;



