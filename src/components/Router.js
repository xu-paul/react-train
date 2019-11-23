import React from 'react';
import App from './App';
import Appbattle from './Appbattle';
import { HashRouter as Router, Route} from "react-router-dom";
function router(){
    return (
    <Router>
       
        <Route exact  path="/" component={App}></Route>
        <Route exact  path="/battle" component={Appbattle}></Route>
        <Route exact  path="/popular" component={App}></Route>

    </Router>);
    }
    
    export default router;