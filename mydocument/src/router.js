import React, { Fragment } from 'react'
import faker from 'faker'
import {
    Route,
} from 'react-router-dom'

import CommentDetails from './components/1-3/CommentDetails';
import Cards from './components/1-3/cards';
import WindowComp from './components/4/window'

export default() => {
    return (    
        <Fragment>
        <Route path='/' exact>
            <div className="ui container comments">
                <Cards>
                    <CommentDetails 
                        name={faker.name.findName()} 
                        email={faker.internet.email()}
                        timeAgo={`${faker.random.number()} days ago`}
                    />
                </Cards>

            </div>
        </Route>
        <Route path='/cart' exact>
            <div className="ui cards">
                <Cards 
                        name={faker.name.findName()} 
                        email={faker.internet.email()}
                        timeAgo={`${faker.random.number()}+ days ago`}
                        />
            </div>
        </Route>
        <Route path='/window'>
            <WindowComp />
        </Route>
        </Fragment>
    )
}
