import React from 'react'
import ReactDOM from 'react-dom'

// const element = <h1>Toplearn</h1>

let tick = () => {
    const element = (
        <div>
            <h1>Toplearn</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )

    ReactDOM.render(
        element,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )