import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import CommitCrud from '../components/commit/CommitCrud'
import BranchCrud from '../components/branch/BranchCrud'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/commits' component={CommitCrud} />
        <Route path='/branch' component={BranchCrud} />
        <Redirect from='*' to='/' />
    </Switch>