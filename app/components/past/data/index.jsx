const React = require('react');
const css = require('./index.css');


const Data = React.createClass({
    render () {
        const spend = arr[this.props.focus].elec_spend
        const free = arr[this.props.focus].elec_free
        return <div className='content'>
            <ul className='list-box'>
                <li className='list'><span>电起度</span><span className='unit'>度</span><span className='elec-data'>{arr[this.props.focus].elec_start}.0</span></li>
                <li className='list'><span>电止度</span><span className='unit'>度</span><span className='elec-data'>{arr[this.props.focus].elec_end}.0</span></li>
                <li className='list'><span>当月所用电量</span><span className='unit'>度</span><span className='elec-data'>{spend - free > 0 ? spend - free : 0}.0</span><img src={require('./images/plus.png')} className='plus'/><span className='data-free'>{free}</span></li>
            </ul>
        </div>
    }
})

module.exports = Data;