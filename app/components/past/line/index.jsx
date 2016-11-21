const React = require('react');
const css = require('./index.css');


const Line = React.createClass({
    render () {
        return <div className='content'>
            <div className='top'>
                ［当前仅可查询前六个月的电量与电费］
            </div>
        </div>
    }
})

module.exports = Line;