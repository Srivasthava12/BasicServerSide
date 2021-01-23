/** @jsx h */
import { h, Component, render } from 'preact';
import { Router } from 'preact-router';
import Todo from './pages/todo/todo'
// import Home from './pages/home/home'

class App extends Component {

    render() {
        return (
            <div class="app">
                <Router>
                    <Todo path="/" page="All" />
                </Router>
            </div>
        );
    }
}



render(<App />, document.getElementById('root'));