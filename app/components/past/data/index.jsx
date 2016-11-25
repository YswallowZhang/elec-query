const React = require('react');
const css = require('./index.css');


const Data = React.createClass({
    render () {
        return <div className='content'>
            <ul className='list-box'>
                <li className='list'><span>电起度</span><span className='unit'>度</span><span className='elec-data'>00.0</span></li>
                <li className='list'><span>电止度</span><span className='unit'>度</span><span className='elec-data'>00.0</span></li>
                <li className='list'><span>当月所用电量</span><span className='unit'>度</span><span className='elec-data'>00.0</span><img src={require('./images/plus.png')} className='plus'/><span className='data-free'>00</span></li>
            </ul>
        </div>
    }
})

module.exports = Data;