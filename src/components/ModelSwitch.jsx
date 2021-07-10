import React from 'react';
import {
        Switch,
        Route
    } from 'react-router-dom';

import Home from './Home';
import Sample from './Sample';
import Design from './Design';
import Pricing from './Pricing';


const ModalSwitch = () => {
    return (
        <div>
                <Switch>
                    <Route from='/sample'>
                        <Sample />
                    </Route>
                    <Route from='/design'>
                        <Design />
                    </Route>
                    <Route from='/pricing'>
                        <Pricing />
                    </Route>
                    <Route from='/'>
                        <Home />
                    </Route>
                </Switch>
        </div>
    )
}

export default ModalSwitch