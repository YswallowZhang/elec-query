const React = require('react');
const ReactDOM = require('react-dom');

const css = require('./index.css');



const Alert = React.createClass({
   
    render() {
        return <div className='alert-box'>
            <div className='alert-top'>
                    <img src={require('./images/logo.png')} className='logo' />
                    <img src={require('./images/decorate.png')} className='star'/>
            </div>
            <div className='alert-middle'>
                <div className='alert-inner'>
                    <span>您确定要重置宿舍信息么<br/>
                一旦重置这个月就不能再次更改了</span>
                </div>
            </div>
            <div className='alert-bottom'>
                <div className='alert-back'>返回</div>
                <div className='alert-confirm'>确定</div>
            </div>
        </div>
    }
})

module.exports = Alert;