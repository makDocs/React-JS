import React, { Fragment } from 'react'

const Cards = (props) => {
    return (
        <Fragment>
        <div className="card" style={{
          background:'white',
          border:'1px solid #eee',
          padding:'10px',
          borderRadius:'7px',
          width:'400px'
      }}>
        <div className='content'>{props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
      </Fragment>
    )
}
export default Cards