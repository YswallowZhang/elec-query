
const React = require('react');
const css = require('./index.css');


const Specific = React.createClass({
    handleClick() {
        this.props.handleClick(!this.props.listDown);
    },
    render() {
        return <div className='specific-box'>
            <div className='title-box' onClick={this.handleClick}>
                <span className='specific-title'>用电详情</span>
                <img src={require('./images/down.png')} style={{
                    WebkitTransform: `rotate(${this.props.listDown ? 0 : 180}deg)`,
                    transform: `rotate(${this.props.listDown ? 0 : 180}deg)`,
                }} className='specific-pic' />
            </div>
            <ul className='list-box' style={{
                display: this.props.listDown ? 'block' : 'none'
            }} ref='hidden'>
                <li className='list'><span>电起度</span><span className='unit'>度</span><span className='specific-data'>{__data.result.elec_start}</span></li>
                <li className='list'><span>电止度</span><span className='unit'>度</span><span className='specific-data'>{__data.result.elec_end}</span></li>
                <li className='list'><span>当月免费电量</span><span className='unit'>度</span><span className='specific-data'>{__data.result.elec_free}</span></li>
            </ul>
        </div>
    }
})     

module.exports = Specific;