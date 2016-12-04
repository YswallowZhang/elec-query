const React = require('react');
const css = require('./index.css');


const Set = React.createClass({
    render() {
        let component;
        if (__data.bind != 1) {
            component =  <a className='set-flag' onClick={(e) => {
                this.props.handleClick();
                e.preventDefault();
            }} href={__data.resetRoomUrl}>[设置寝室]</a>
        } else {
             component = <span className='set-flag'>[本月已设置]</span>
        }
        return <div className='set-box'>
            <span className='user-name'>{__data.bind == 1 ? __data.person : '用户名'}</span>
            <span className='comma'>，</span>
            <span className='user-room'>{__data.bind == 1 ? __data.room['0'] + '栋' + __data.room['1'] + '寝室' : '用户寝室'}</span>
            {component}
        </div>
    }
})     

module.exports = Set;