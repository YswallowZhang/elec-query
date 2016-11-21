const React = require('react');
const css = require('./index.css');


const Set = React.createClass({

    render() {
        return <div className='set-box'>
            <span className='user-name'>用户名</span>
            <span className='comma'>,</span>
            <span className='user-room'>用户寝室</span>
            <span className='set-flag'>[设置寝室]</span>
        </div>
    }
})     

module.exports = Set;