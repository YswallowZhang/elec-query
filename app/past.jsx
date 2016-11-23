const React = require('react');
const ReactDOM = require('react-dom');

const css = require('./main.css');

const Line = require('./components/past/line/index.jsx');
const Back = require('./components/past/back/index.jsx');
const Data = require('./components/past/data/index.jsx');


const App = React.createClass({
    getInitialState() {
        return {
           data:[
                {
                    start:'30',
                    end:'80',
                    free:'30',
                    rest:'20'
                }, {
                    start:'80',
                    end:'120',
                    free:'30',
                    rest:'10'                  
                }
           ]
        }
    },
    render() {
        return <div>
            <Line 


            />
            <Data />
            <Back />
        </div>
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
