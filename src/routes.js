import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LayoutView from "./components/layout/layout"

const Routes = () => 
    <Switch>
        <Route exact path='/' component={LayoutView}/>
    </Switch>


export default Routes