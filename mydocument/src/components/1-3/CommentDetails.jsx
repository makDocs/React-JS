import React, { Fragment } from 'react'
import faker from 'faker'
const CommentDetails = (props) => {
    return (
        <Fragment>
        <div className="comment">
            <a className="avatar" dideo-checked="true">
                <img src={faker.image.business()}/>
            </a>
            <div className="content">
                <a className="author" dideo-checked="true">{props.name}</a>
                <div className="metadata">
                    <span className="date">5 {props.toAgo}</span>
                </div>
                <div className="text">
                    Dude, this is awesome. Thanks so much
                </div>
                </div>
                <hr/>
        </div>
        </Fragment>
    )
}
export default CommentDetails;