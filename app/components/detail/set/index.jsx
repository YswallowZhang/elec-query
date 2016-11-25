const React = require('react');
const css = require('./index.css');


const Set = React.createClass({
    render() {
        return <div className='set-box'>
            <span className='user-name'>用户名</span>
            <span className='comma'>,</span>
            <span className='user-room'>用户寝室</span>
            <a className='set-flag' onClick={(e) => {
                this.props.handleClick();
                e.preventDefault();
            }} href=''>[设置寝室]</a>
        </div>
    }
})     

module.exports = Set;