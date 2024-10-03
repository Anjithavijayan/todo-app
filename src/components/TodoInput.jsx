
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, setEditId } from '../store/todosSlice';

const TodoInput = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const editId = useSelector((state) => state.todos.editId);
    const todos = useSelector((state) => state.todos.items);

    // Effect to populate input if in edit mode
    useEffect(() => {
        const todoToEdit = todos.find(todo => todo.id === editId);
        if (todoToEdit) {
            setInput(todoToEdit.text);
        } else {
            setInput('');
        }
    }, [editId, todos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            if (editId) {
                dispatch(editTodo({ id: editId, text: input })); // Dispatch edit action
            } else {
                dispatch(addTodo(input)); // Dispatch add action
            }
            setInput('');
            dispatch(setEditId(null)); // Reset editId after submission
        }
    };

    return (
        <div style={{ height: '100px' }}>
            <h4 className="text-center text-dark mt-5">TO DO LIST</h4>
            <form onSubmit={handleSubmit} style={{ height: '20px' }}>
                <div className="mb-3 mt-5 d-flex justify-content-center">
                    <input
                        type="text"
                        value={input}
                        className="form-control shadow"
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add or edit a todo"
                        style={{ width: '400px' }}
                    />
                    <button type="submit" className='btn2 p-2 ms-2 shadow' style={{ color: 'white' }}>
                        {editId ? 'Update Todo' : 'Add Todo'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TodoInput;
