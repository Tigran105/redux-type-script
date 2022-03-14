import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: FC = () => {
    const {todos, error, loading, limit, page} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const [pages, setPages] = useState<any[]>([1, 2, 3, 4, 5])
    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])
    if (loading) {
        return <h1>Loading ...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    const addPages = () => {
        pages.push(+(pages.length + 1))
        setPages([...pages])
    }
    return (
        <div>
            {todos.map(todo => {
                return <div key={todo.id}>
                    {todo.id} - {todo.title}
                </div>
            })}
            <div style={{display: "flex", cursor: "pointer"}}>
                {pages.map(p => {
                    return <div key={p}
                                onClick={() => setTodoPage(p)}
                                style={{
                                    border: p === page ? "2px solid green" : "1px dashed gray",
                                    padding: "10px"
                                }}
                    >
                        {p}
                    </div>
                })}
                <div style={{
                        border: "2px dashed gray",
                        padding: "10px"
                    }}
                    onClick={addPages}>
                    +
                </div>
            </div>
        </div>
    );
};

export default TodoList;