const React = require('react');
const css = require('./index.css');

const Rooms = React.createClass({
    handleClick(event) {
        console.log(event.target.value);
        this.props.changeRoom(event.target.value)
    },
    render() {
        return <div className='room-box'>
                <img src={require('./images/room.png')} className='rooms-pic' />
                <input className='which-room' placeholder='寝室号（三位数）' onChange={this.handleClick} /> 
        </div>
    }
})  

module.exports = Rooms