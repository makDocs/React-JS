import React, { Component } from 'react';
import {
    Button,
    Badge
} from 'reactstrap';

class Counter extends Component {
    render() { 
        const {
            counter,
            onDelete,
            onIncrement,
            onDecrement
                } = this.props;
        return ( 
            <div>
                <Badge color={this.getBadgeColor()} className="m-2">
                    {this.formatCount()}
                </Badge>
                <Button
                    color="danger"
                    className="btn-sm m-2"
                    onClick={() => onDelete(counter.id)}
                >
                    حذف    
                </Button>
                <Button 
                    color="warning"
                    className="btn-sm"
                    onClick={() => onDecrement(counter)}
                >
                    کاهش
                </Button>
                <Button 
                    color="primary"
                    className="btn-sm m-2"
                    onClick={() => onIncrement(counter)}
                >
                    افزایش
                </Button>
            </div>

         )
    }

    getBadgeColor() {
        return this.props.counter.value <= 0 ? 'warning' : 'primary';
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'صفر' : value;
    }
}
 
export default Counter;