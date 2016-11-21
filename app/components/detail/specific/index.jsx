
const React = require('react');
const css = require('./index.css');


const Specific = React.createClass({

    render() {
        return <div className='specific-box'>
            <div className='title-box'>
                <span className='specific-title'>用电详情</span>
                <img src={require('./images/down.png')} className='specific-pic'/>
            </div>
            <ul className='list-box'>
                <li className='list'><span>电起度</span><span className='unit'>度</span><span className='specific-data'>11:2</span></li>
                <li className='list'><span>电止度</span><span className='unit'>度</span><span className='specific-data'>2</span></li>
                <li className='list'><span>当月免费电量</span><span className='unit'>度</span><span className='specific-data'>3</span></li>
            </ul>
        </div>
    }
})     

module.exports = Specific;