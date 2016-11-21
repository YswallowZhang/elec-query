const React = require('react');
const css = require('./index.css');

const Btn = React.createClass({
    handleClick() {
        this.props.sendInformation();
    },
    render() {
        return <div 
            onClick={this.handleClick}
            className='confirm'>
                确认
        </div>
    }
})
module.exports = Btn