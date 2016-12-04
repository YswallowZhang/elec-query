
const React = require('react');
const css = require('./index.css');


const Result = React.createClass({

    render() {
        const free = __data.result.elec_free;
        const spend = __data.result.elec_spend;
        const spendWithoutFree = spend - free > 0 ? spend - free : '0.0';

        return <div className='result-box'>
            <div className="content-box">
                <div className='much-number'>
                    <div className='much-inner'>
                        <span>本月<br/>用电</span>
                    </div>
                </div>
                <div>
                    <span className='elec-free elec'>{free}</span>
                    <img src={require('./images/plus.png')} className='plus-pic' />
                    <span className='elec-rest elec'>{spendWithoutFree}</span>
                    <span className='energy'>度</span>
                </div>
            </div>
            <div className="content-box">
                <div className='much-number'>
                    <div className='much-inner'>
                        <span>本月<br/>电费</span>
                    </div>
                </div>
                <div>               
                    <span className='elec-money elec'>{__data.result.elec_costL}.{__data.result.elec_costR}</span>
                    <span className='energy'>元</span>
                </div>
            </div>
            <div className='reading-date'>
                <span>抄表日期:</span>
                <span className='what-date'>{__data.result.record_time}</span>
                <span className='what-time'>08:00</span>
                <a className='past-elec' href={__data.pastElecUrl}>[往期电费]</a>
            </div>
        </div>
    }
})     

module.exports = Result;