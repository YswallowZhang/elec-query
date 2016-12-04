const React = require('react');
const css = require('./index.css');


const Banner = React.createClass({
    render () {
        return <div className='banner' style={{
            background: `url(${__data.img.banner})`
        }}>
            <h1 className='title'>
                电费查询
            </h1>
            <div className='electricity-meter'>
                <img src={__data.img.elecmeter} className='elecmeter'/>
            </div>
        </div>
    }
})

module.exports = Banner;