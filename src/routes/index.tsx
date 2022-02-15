import React from 'react';

import { Route, BrowserRouter, Switch} from 'react-router-dom';
import { Repositories } from '../pages/Repositories';
import { Repository } from '../pages/Repository';

export const Router: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={Repositories} />
            <Route path='/repository/:id/:desc' component={Repository} />
        </Switch>
    );
};