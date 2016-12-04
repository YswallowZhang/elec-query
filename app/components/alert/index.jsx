const React = require('react');
const ReactDOM = require('react-dom');

const css = require('./index.css');


const Alert = React.createClass({
   
    render() {
        const sp = this.props.sp;
        let alertInner;
        if (sp) {
            alertInner = <span>您确定要重置宿舍信息么<br/>一旦重置这个月就不能再次更改了</span>;
        } else {
            alertInner = <span>{this.props.val}</span>
        }

        return <div className='alert-box-container' style={{
            height: window.innerHeight + 'px',
            display: this.props.show ? 'block' : 'none'
        }}>
            <div className='alert-box'>
                <div className='alert-top'>
                        <img src={require('./images/logo.png')} className='logo' />
                        <img src={__data.img.decorate} className='star'/>
                </div>
                <div className='alert-middle'>
                    <div className='alert-inner'>
                        {alertInner}
                    </div>
                </div>
                <div className='alert-bottom'>
                    <div className='alert-back' onClick={this.props.back}>返回</div>
                    <div className='alert-confirm' onClick={this.props.confirm}>确定</div>
                </div>
            </div>
        </div>
    }
})

module.exports = Alert;