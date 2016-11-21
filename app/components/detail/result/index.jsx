
const React = require('react');
const css = require('./index.css');


const Result = React.createClass({

    render() {
        return <div className='result-box'>
            <div className="content-box">
                <div className='much-number'>
                    <div className='much-inner'>
                        <span>本月<br/>用电</span>
                    </div>
                </div>
                <div>
                    <span className='elec-free elec'>00</span>
                    <img src={require('./images/plus.png')} className='plus-pic' />
                    <span className='elec-rest elec'>00.0</span>
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
                    <span className='elec-money elec'>00.0</span>
                    <span className='energy'>元</span>
                </div>
            </div>
            <div className='reading-date'>
                <span>抄表日期:</span>
                <span className='what-date'>01月01日</span>
                <span className='what-time'>08:00</span>
                <span className='past-elec'>[往期电费]</span>
            </div>
        </div>
    }
})     

module.exports = Result;