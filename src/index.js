import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.scss'

const Loading = () => <h1>Loading</h1>;

const Home = Loadable({
    loader: () => import('./routes/home'),
    loading: Loading,
});

const App = () => (
<Router>
    <Switch>
        <Route exact path='/' component={Home}/>
    </Switch>
</Router>)

ReactDOM.render(<App/>, document.getElementById("root"))