import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
        }}>
            <TodoList/>
            <UserList/>
        </div>
    );
}

export default App;
