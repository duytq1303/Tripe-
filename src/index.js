import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './routes/Home'
const Loading = () => <h1>Loading</h1>;

// const Home = Loadable({
//     loader: () => import('./routes/Home'),
//     loading: Loading,
// });

const App = () => (
<Router>
    <Switch>
        <Route exact path='/' component={Home}/>
    </Switch>
</Router>)

ReactDOM.render(<App/>, document.getElementById("root"))