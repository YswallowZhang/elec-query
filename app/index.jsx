const React = require('react');
const ReactDOM = require('react-dom');

const css = require('./main.css');

const Banner = require('./components/index/banner/index.jsx');
const Buildings = require('./components/index/buildings/index.jsx');
const Rooms = require('./components/index/rooms/index.jsx');
const Btn = require('./components/index/button/index.jsx');
const Alert = require('./components/alert/index.jsx');

const App = React.createClass({
    getInitialState() {
        return {
            building: null,
            room: null,
            buildings: [
                '选择楼栋',
            ].concat(__data.buildings),
            showAlert: false,
            val: null
        }
    },
    changeBuilding(building) {
        this.setState({
            building: building
        });
    },
    changeRoom(room) {
        this.setState({
            room:room
        });
    },
    changeAlert(bool, val) {
        if (val) 
            return this.setState({
                showAlert: bool,
                val: val
            })
        this.setState({
            showAlert: bool
        });
    },
    sendInformation() {
        console.log(this.state)
        if(!this.state.room || this.state.building == '选择楼栋' || this.state.building === null)
            return this.changeAlert(true, '请完善寝室信息');
        const xhr = new XMLHttpRequest();
        xhr.open('POST', __data.bindRoomUrl, true);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 304) {
                var res = JSON.parse(xhr.responseText);
                this.setState({
                    showAlert: true,
                    val: res.info
                });
                if (res.status === 200)
                    setTimeout(function () {
                        window.location = __data.dataQueryUrl;
                    }, 1000);
            }
        }
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  

        xhr.send(
            'building=' + this.state.building + '&room=' + this.state.room
        );
    },
    render() {
        return <div>
            <Banner />
            <Buildings 
                changeBuilding={this.changeBuilding}
                building={this.state.building}
                buildings={this.state.buildings}
            />
            <Rooms 
                changeRoom={this.changeRoom}
            />
            <Btn 
                sendInformation={this.sendInformation}
            />
            <Alert 
                show={this.state.showAlert}
                val={this.state.val}
                confirm={() => {
                    this.changeAlert(false);
                }}
                back={() => {
                    this.changeAlert(false);
                }}
            />
        </div>
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


