import React from 'react';
import ReactDOM from 'react-dom';

// let formatName = (user) => {
//     return `${user.firstName} ${user.lastName}`;
// }

let greeting = (user) => {
    if (user) {
        return <h1>Hello, {user.firstName}</h1>;
    }
    return <h1>Hello, Toplearn</h1>;
}

let user = {
    firstName: 'Jonah',
    lastName: 'Ghorbany'
};

// let fullName = 'Jonah Ghorbany';
let element = (
    <div>
        <h1>
            {greeting(user)}
        </h1>
    </div>
);

// let element2 = <div tabIndex="0"></div>;
// let element3 = <img src={user.avatarUrl}/>;

ReactDOM.render(
    element,
    document.getElementById('root')
);