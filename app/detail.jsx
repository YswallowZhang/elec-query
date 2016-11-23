const React = require('react');
const ReactDOM = require('react-dom');

const css = require('./main.css');

const Set = require('./components/detail/set/index.jsx');
const Result = require('./components/detail/result/index.jsx');
const Specific = require('./components/detail/specific/index.jsx');
const Attention = require('./components/detail/attention/index.jsx');


const App = React.createClass({
    
    changeFlag() {
        this.setState({

        })
    },
    render() {
        return <div>
            <Set/>
            <Result />
            <Specific />
            <Attention />
        </div>
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
);