import React from 'react'
import ReactDOM from 'react-dom'

// let tick = () => {
//     const element = (
//         <div>
//             <h1>Toplearn</h1>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     )

//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     )
// }

// setInterval(tick, 1000)

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

let App = () => {
    return (
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);



// let tick = () => {
//     ReactDOM.render(
//         <Clock/>,
//         document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);

// this.state.comment = 'hello';
// this.setState({comment: 'hello'})

// constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//       comments: []
//     };
//   }

// componentDidMount() {
//     fetchPosts().then(response => {
//       this.setState({
//         posts: response.posts
//       });
//     });

//     this.setState({posts})

//     fetchComments().then(response => {
//       this.setState({
//         comments: response.comments
//       });
//     });
//   }