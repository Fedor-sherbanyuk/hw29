import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Fedor 1',
                    completed: false,
                },
                {
                    id: 2,
                    text: 'Fedor 2',
                    completed: true,
                },
                {
                    id: 3,
                    text: 'Fedor 3',
                    completed: false,
                },
                {
                    id: 4,
                    text: 'Fedor 4',
                    completed: true,
                },
            ],
            newTodo: '',
        };
    }

    handleToggle = (id) => {
        const updatedTodos = [...this.state.todos];
        const index = updatedTodos.findIndex((todo) => todo.id === id);

        if (index !== -1) {
            updatedTodos[index].completed = !updatedTodos[index].completed;
            this.setState({ todos: updatedTodos });
        }
    };

    handleInputChange = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    handleAddTodo = () => {
        const newTodo = {
            text: this.state.newTodo,
            completed: false,
            id: this.state.todos.length + 1
        };

        this.setState((prevState) => ({
            todos: [...prevState.todos, newTodo],
            newTodo: '',
        }));
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.todos.map((todo) => (
                        <li
                            key={todo.id}
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            onClick={() => this.handleToggle(todo.id)}
                        >
                            {todo.text}
                        </li>
                    ))}
                </ul>
                <div>
                    <input
                        type="text"
                        value={this.state.newTodo}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleAddTodo}>Додати Тудушку</button>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoApp />
);
