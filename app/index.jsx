const React = require('react');
const ReactDOM = require('react-dom');

const css = require('./main.css');

const Banner = require('./components/index/banner/index.jsx');
const Buildings = require('./components/index/buildings/index.jsx');
const Rooms = require('./components/index/rooms/index.jsx');
const Btn = require('./components/index/button/index.jsx');

const App = React.createClass({
    getInitialState() {
        return {
            ludong: null
        }
    },

    render() {
        return <div>
            <Banner />
            <Buildings/>
            <Rooms />
            <Btn />
        </div>
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


