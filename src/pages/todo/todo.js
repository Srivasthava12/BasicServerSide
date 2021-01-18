/** @jsx h */
import { h, Component } from 'preact';

class Todo  extends Component {
    addTodo() {
        const { todos = [] } = this.state;
        this.setState({ todos: todos.concat(`Item ${todos.length}`) });
    }
    render({ page }, { todos = [] }) {
        return (
            <div class="app">
                <Header name={`TODO ${page}`} />
                <ul>
                    {todos.map(todo => (
                        <li key={todo}>{todo}</li>
                    ))}
                </ul>
                <button onClick={() => this.addTodo()}>Add Todo</button>
            </div>
        );
    }
}

const Header = ({ name }) => (<h1>{name} List</h1>)


export default Todo