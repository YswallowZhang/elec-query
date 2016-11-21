const React = require('react');
const css = require('./index.css');

const Buildings = React.createClass({

    render() {
        return <div className='build-box'>
            
            <img src={require('./images/build.png')} className='build-pic'/>
            <span className='choose-build'>选择楼栋</span>
            <div className='build-drop'>
                <img className='drop-pic' src={require('./images/dropdown.png')}/>
            </div>
           
        </div>
    }
})

module.exports = Buildings;