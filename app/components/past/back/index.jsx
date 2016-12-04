const React = require('react');
const css = require('./index.css');


const Back = React.createClass({
    render () {
        return <a className='back-btn' href={__data.queryElecUrl}>
            返回
        </a>
    }
})

module.exports = Back;