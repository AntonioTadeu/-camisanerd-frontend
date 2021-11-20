import Home from "./pages/home/home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home}></Route>
            </Switch>
        </Router>
    )
}

export default App;