const React = require('react');
const css = require('./index.css');

const Rooms = React.createClass({

    render() {
        return <div className='room-box'>
                <img src={require('./images/room.png')} className='rooms-pic' />
                <input className='which-room' placeholder='寝室号（三位数）' /> 
        </div>
    }
})  

module.exports = Rooms