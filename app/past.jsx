const React = require('react');
const ReactDOM = require('react-dom');

const css = require('./main.css');

const Line = require('./components/past/line/index.jsx');
const Back = require('./components/past/back/index.jsx');
const Data = require('./components/past/data/index.jsx');


const App = React.createClass({

    render() {
        return <div>
            <Line />
            <Data />
            <Back />
        </div>
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
