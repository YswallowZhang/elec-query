const React = require('react');
const css = require('./index.css');

const Buildings = React.createClass({
    handleChange(event) {
        const selectIndex = event.target.selectedIndex
        this.props.changeBuilding(
            this.props.buildings[selectIndex]
        )
    },
    render() {
        return <div className='build-box'>
            
            <img src={require('./images/build.png')} className='build-pic'/>
            <select className='choose-build' onChange={this.handleChange}>
                {
                    this.props.buildings.map(function (item, index) {
                        return <option key={index} value={item}>{ item }</option>
                    })
                }
            </select>
            <div className='build-drop'>
                <img className='drop-pic' src={require('./images/dropdown.png')}/>
            </div>
            
        </div>
    }
})

module.exports = Buildings;