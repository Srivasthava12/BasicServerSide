/** @jsx h */
import { h, Component, render } from "preact";
import { Router } from "preact-router";
import Todo from "./pages/todo/todo";
import Home from "./pages/home/home";

class App extends Component {
  render() {
    return (
      <div class="container is-mobile">
        <Router>
          <Home path="/" page="All" />
          <Todo path="/todo" page="All" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
