const React = require('react');
const ReactDOM = require('react-dom');

const css = require('./main.css');

const Line = require('./components/past/line/index.jsx');
const Back = require('./components/past/back/index.jsx');
const Data = require('./components/past/data/index.jsx');


const App = React.createClass({
    getInitialState() {
        return {
            focus: 5
        }
    },
    handleClick(event) {
        if(event.target.className === 'triangle') return 
        this.setState({
            focus: parseInt(event.target.getAttribute('data-index'))
        })
    },
    render() {
        return <div>
            <Line 
                focus={this.state.focus}
                handleClick={this.handleClick}
            />
            <Data 
                focus={this.state.focus}
            />
            <Back />
        </div>
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
