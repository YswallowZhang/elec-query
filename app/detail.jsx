const React = require('react');
const ReactDOM = require('react-dom');

const css = require('./main.css');

const Set = require('./components/detail/set/index.jsx');
const Result = require('./components/detail/result/index.jsx');
const Specific = require('./components/detail/specific/index.jsx');
const Attention = require('./components/detail/attention/index.jsx');
const Alert = require('./components/alert/index.jsx');


const App = React.createClass({
    getInitialState() {
        return {
            listDown: true,
            showAlert: false
        }
    },
    changeListDown(bool) {
        this.setState({
            listDown: bool
        })
    },
    changeShowAlert(bool) {
        this.setState({
            showAlert: bool
        })
    },
    render() {
        return <div>
            <Set
                handleClick={() => {
                    this.changeShowAlert(true);
                }}
            />
            <Result />
            <Specific 
                handleClick={this.changeListDown}
                listDown={this.state.listDown}
            />
            <Attention />
            <Alert 
                show={this.state.showAlert}
                sp={true}
                back={() => {
                    this.changeShowAlert(false);
                }}
                confirm={() => {
                    window.location = '';
                }}
            />
        </div>
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
);